const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./api_handler.js');

const app = express();
const port = 3000;

const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use(express.json());

app.use('/products/:q', staticMiddleware);

app.get('/products/:q/:b', (req, res) => {
  // console.log('SERVER URL=> ', req.url);
  const memCache = [];
  const id = req.params.b;
  // console.log('SERVER params==> ', id);
  api.fetchData(`/products/${id}`, null, (productDetails) => {
    // store the data
    memCache.push(productDetails.data);
    api.fetchData(`/products/${id}/styles`, null, (productStyles) => {
      memCache.push(productStyles.data);
      api.fetchData('/reviews/', { params: { product_id: Number(id), sort: 'relevant' } }, (reviews) => {
        memCache.push(reviews.data);
        api.fetchData('/reviews/meta', { params: { product_id: Number(id) } }, (reviewsMeta) => {
          memCache.push(reviewsMeta.data);
          api.fetchData('/qa/questions', { params: { product_id: Number(id), count: 100 } }, (questions) => {
            memCache.push(questions.data);
            res.send(memCache);
          });
        });
      });
    });
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/questions/', (req, res) => {
  api.postQnA('/qa/questions', req.body, () => {
    api.fetchData('/qa/questions', { params: { product_id: Number(req.body.product_id), count: 100 } }, (questions) => {
      res.send(questions.data);
    });
  });
});

app.post('/questions/:i', (req, res) => {
  api.postQnA(`/qa/questions/${req.params.i}/answers`, req.body, () => {
    api.fetchData(`/qa/questions/${req.params.i}/answers`, { params: { question_id: Number(req.body.question_id), count: 100 } }, (answer) => {
      res.send(answer.data);
    });
  });
});

app.put('/h/questions/:i', (req, res) => {
  api.putQnA(`/qa/questions/${req.params.i}/helpful`, { params: { question_id: Number(req.params.i) } }, () => {
    res.send(201);
  });
});

app.put('/a/questions/:i', (req, res) => {
  api.putQnA(`/qa/answers/${req.params.i}/helpful`, { params: { answer_id: Number(req.params.i) } }, () => {
    res.send(201);
  });
});

app.put('/r/questions/:i', (req, res) => {
  api.putQnA(`/qa/answers/${req.params.i}/report`, { params: { answer_id: Number(req.params.i) } }, () => {
    res.send(201);
  });
});

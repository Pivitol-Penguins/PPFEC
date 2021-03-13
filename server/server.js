const express = require('express');
const path = require('path');
const multiparty = require('multiparty');

const api = require('./api_handler.js');

const app = express();
const port = 3000;

const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use(express.json());

app.use('/products/:q', staticMiddleware);

app.get('/products/:q/:b', (req, res) => {
  // console.log('SERVER URL=> ', req.url); products/14931/14931
  const memCache = [];
  const id = req.params.b;
  // console.log('SERVER params==> ', id);
  api.fetchData(`/products/${id}`, null, (productDetails) => {
    // store the data
    memCache.push(productDetails.data);
    api.fetchData(`/products/${id}/styles`, null, (productStyles) => {
      memCache.push(productStyles.data);
      api.fetchData('/reviews/', { params: { product_id: Number(id), sort: 'relevant', count: 100 } }, (reviews) => {
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

// handle get request for sort option in Review component
app.get('/products/:q/:b/reviews/:sort', (req, res) => {
  const productId = req.params.q;
  const inputSort = req.params.sort;
  api.fetchData('/reviews', { params: { product_id: Number(productId), sort: inputSort, count: 100 } }, (reviews) => {
    res.send(reviews.data);
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// handle get request for Add Review Form Submit
app.post('/products/:q/:b/reviews', (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if (err) {
      throw new Error(err);
    }
    // console.log('FILES: ', files);
    // console.log('FIELDS: ', fields);
    const photoPaths = [];
    if (files.photos) {
      files.photos.forEach((photo) => {
        photoPaths.push(photo.path);
      });
    }
    const query = fields;
    api.createData('/reviews', {
      product_id: Number(query.productId),
      rating: Number(query.rating),
      characteristics: JSON.parse(query.characteristics),
      recommend: JSON.parse(query.recommend),
      summary: JSON.parse(query.summary),
      body: JSON.parse(query.body),
      name: JSON.parse(query.name),
      email: JSON.parse(query.email),
      photos: photoPaths,
    }, () => {
      api.fetchData('/reviews', { params: { product_id: Number(query.productId), count: 100 } }, (reviews) => {
        res.send(reviews.data);
      });
    });
  });
});

// handle put request from review section
app.put('/products/:q/:b/reviews/:review_id/report', (req, res) => {
  api.updateData(`/reviews/${req.params.review_id}/report`, { review_id: req.params.review_id }, () => {
    api.fetchData('/reviews', { params: { product_id: Number(req.params.q), count: 100 } }, (reviews) => {
      res.send(reviews.data);
    });
  });
});

app.put('/products/:q/:b/reviews/:review_id/helpful', (req, res) => {
  api.updateData(`/reviews/${req.params.review_id}/helpful`, { review_id: req.params.review_id }, () => {
    api.fetchData('/reviews', { params: { product_id: Number(req.params.q), count: 100 } }, (reviews) => {
      res.send(reviews.data);
    });
  });
});

// handle put and post for QnA section
app.post('/questions/', (req, res) => {
  api.createData('/qa/questions', req.body, () => {
    api.fetchData('/qa/questions', { params: { product_id: Number(req.body.product_id), count: 100 } }, (questions) => {
      res.send(questions.data);
    });
  });
});

app.post('/questions/:i', (req, res) => {
  api.createData(`/qa/questions/${req.params.i}/answers`, req.body, () => {
    api.fetchData(`/qa/questions/${req.params.i}/answers`, { params: { question_id: Number(req.body.question_id), count: 100 } }, (answer) => {
      res.send(answer.data);
    });
  });
});

app.put('/h/questions/:i', (req, res) => {
  api.updateData(`/qa/questions/${req.params.i}/helpful`, { params: { question_id: Number(req.params.i) } }, () => {
    res.send(201);
  });
});

app.put('/a/questions/:i', (req, res) => {
  api.updateData(`/qa/answers/${req.params.i}/helpful`, { params: { answer_id: Number(req.params.i) } }, () => {
    res.send(201);
  });
});

app.put('/r/questions/:i', (req, res) => {
  api.updateData(`/qa/answers/${req.params.i}/report`, { params: { answer_id: Number(req.params.i) } }, () => {
    res.send(201);
  });
});

app.listen(port);

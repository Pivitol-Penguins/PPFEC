const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./api_handler.js');
const app = express();
const port = 3000;


const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use('/products/:q', staticMiddleware);

app.get('/products/:q/:b', (req, res) => {
  // console.log('SERVER URL=> ', req.url);
  const memCache = [];
  var id = req.params.b;
  // console.log('SERVER params==> ', id);
  api.fetchData('/products/' + id, null, (productDetails) => {
    // store the data
    memCache.push(productDetails.data);
    api.fetchData('/products/' + id + '/styles', null, (productStyles) => {
      memCache.push(productStyles.data);
      api.fetchData('/reviews/', {params: {"product_id": Number(id), "sort": "relevant"}}, (reviews) => {
        memCache.push(reviews.data);
        api.fetchData('/reviews/meta', {params: {"product_id": Number(id)}}, (reviewsMeta) => {
          memCache.push(reviewsMeta.data);
          api.fetchData('/qa/questions', {params: {"product_id": Number(id)}}, (questions) => {
            memCache.push(questions.data);
            res.send(memCache);
          })
        })
      })
    })
  })
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./api_handler.js');
const app = express();
const port = 3000;


const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use('/products/:q', staticMiddleware);

app.get('/products/:q/:b', (req, res) => {
  console.log('SERVER URL=> ', req.url);
  const memCache = [];
  var id = req.params.q
  console.log('SERVER params==> ', req.params);
  api.fetchProducts(id, (productDetails) => {
    // store the data
    memCache.push(productDetails.data);
    api.fetchProductStyles(id, (productStyles) => {
      memCache.push(productStyles.data);
      res.send(memCache);
    })
  })
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});

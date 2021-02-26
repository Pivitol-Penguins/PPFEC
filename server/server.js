const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./api_handler.js');
const app = express();
const port = 3000;


const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use('/', staticMiddleware);

app.get('/products', (req, res) => {
  api.fetchProducts((data) => {
    res.send(data.data);
  })

});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});

const axios = require('axios');

const API_KEY = '0810105ecbde64279290872b3135e6c90eea84c8';

axios.defaults.headers.common['Authorization'] = API_KEY;

const fetchProducts = (callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products') .then((data) => {
    console.log(data);
    callback(data);
  }) .catch(err => {
    console.log(err);
  })
}

module.exports.fetchProducts = fetchProducts;
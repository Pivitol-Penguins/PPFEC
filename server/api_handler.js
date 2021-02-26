const axios = require('axios');

const API_KEY = '0810105ecbde64279290872b3135e6c90eea84c8';

axios.defaults.headers.common['Authorization'] = API_KEY;

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

const fetchProducts = (id, callback) => {
  axios.get(API_URL + '/products/' + id)
     .then((data) => {
    callback(data);
  }) .catch(err => {
    console.log(err);
  })
}

const fetchProductStyles = (id, callback) => {
  axios.get(API_URL + '/products/' + id + '/styles')
     .then((data) => {
    callback(data);
  }) .catch(err => {
    console.log(err);
  })
}

module.exports.fetchProducts = fetchProducts;
module.exports.fetchProductStyles = fetchProductStyles;
const axios = require('axios');
const API_KEY = require('../config/API.js');

axios.defaults.headers.common['Authorization'] = API_KEY.API_KEY;

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
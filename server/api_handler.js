const axios = require('axios');
const API_KEY = require('../config/API.js');

axios.defaults.headers.common['Authorization'] = API_KEY.API_KEY;

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

const fetchData = (path, query, callback) => {
  axios.get(API_URL + path, query)
     .then((data) => {
    callback(data);
  }) .catch(err => {
    console.log(err);
  })
}

module.exports.fetchData = fetchData;

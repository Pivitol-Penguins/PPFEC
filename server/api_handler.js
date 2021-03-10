const axios = require('axios');
const API_KEY = require('../config/API.js');

axios.defaults.headers.common.Authorization = API_KEY.API_KEY;

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

const fetchData = (path, query, callback) => {
  axios.get(API_URL + path, query)
    .then((data) => {
      callback(data);
    }).catch((err) => {
      throw err;
    });
};

const createData = (path, query, callback) => {
  axios.post(API_URL + path, query)
    .then((res) => {
      callback(res);
    }).catch((err) => {
      throw err;
    });
};

const updateData = (path, query, callback) => {
  axios.put(API_URL + path, query)
    .then((res) => {
      callback(res);
    }).catch((err) => {
      throw err;
    });
};

module.exports.fetchData = fetchData;
module.exports.createData = createData;
module.exports.updateData = updateData;

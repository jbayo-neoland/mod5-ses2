const axios = require('axios')
const dbAddress = 'http://localhost:3040';

module.exports = {
  find: async (params) => {
    let response = await axios.get(`${dbAddress}/comments`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  },

  findOne: async (id) => {
    return await axios.get(`${dbAddress}/comments/${id}`);
  },

  create: async (comment) => {
    let response = await axios.post(`${dbAddress}/comments/`, comment);
    if (response.status >= 200 && response.status < 300) {
      return comment;
    }
    return false;
  },

  update: async (comment) => {
    return await axios.patch(`${dbAddress}/comments/`);
  }
}

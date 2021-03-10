const axios = require('axios')
const dbAddress = 'http://localhost:3040';

module.exports = {
  find: async (params) => {
    let response = await axios.get(`${dbAddress}/comments`, {params});
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  },

  findOne: async (id) => {
    let response = await axios.get(`${dbAddress}/comments/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  },

  create: async (comment) => {
    let response = await axios.post(`${dbAddress}/comments/`, comment);
    if (response.status >= 200 && response.status < 300) {
      return comment;
    }
    return false;
  },

  update: async (comment) => {
    let response =  await axios.patch(`${dbAddress}/comments/${comment.id}`, comment);
    if (response.status >= 200 && response.status < 300) {
      return comment;
    }
    return false;
  }
}

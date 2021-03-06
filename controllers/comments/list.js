// 1.1
const commentsModel = require('../../models/comments');

module.exports = {
  listComments: async function(req, res, next) {
    // 1.2
    let comments = await commentsModel.find();
    // 2
    res.render('comments', {title:"List of comments", listComments: comments });
  }
}

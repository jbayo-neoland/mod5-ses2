// 1.1
const commentsModel = require('../../models/comments');

module.exports = {
  listComments: async function(req, res, next) {
    let {page, limit} = req.query;
    if (!limit) {
      limit = 10;
    }
    if (!page) {
      page = 1;
    }
    // 1.2
    let comments = await commentsModel.find({"_limit": limit, "_page": page});
    // 2
    res.render('comments/list', {title:"List of comments", listComments: comments });
  }
}

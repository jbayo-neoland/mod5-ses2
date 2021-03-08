// 1.1
const commentsModel = require('../../models/comments');

module.exports = {
  listComments: async function(req, res, next) {
    let {page, limit} = req.query;
    limit = limit ? parseInt(limit) : 10;
    page = page ? parseInt(page) : 1;

    let nextPage = page + 1;
    let prevPage = page - 1 > 0 ? page - 1 : 0;
    // 1.2
    let comments = await commentsModel.find({"_limit": limit, "_page": page});
    // 2
    res.render('comments/list', {
      title:"List of comments",
      listComments: comments,
      prevPage: prevPage,
      nextPage: nextPage,
      limit: limit
    });
  }
}

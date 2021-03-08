// 1.1
const commentsModel = require('../../models/comments');

module.exports = {
  detailComment: async function(req, res, next) {
    // 1.2
    let comment = await commentsModel.findOne(req.params.id);
    // 2
    res.render('comments/detail', {comment: comment });
  }
}

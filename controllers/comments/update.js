// 1.1
const commentsModel = require('../../models/comments');


module.exports = {
  updateCommentGet: async function (req, res) {
    let comment = await commentsModel.findOne(req.params.id);
    res.render('comments/update', {comment: comment});
  }
}

// 1.1
const commentsModel = require('../../models/comments');


module.exports = {
  updateCommentGet: async function (req, res) {
    let comment = await commentsModel.findOne(req.params.id);
    res.render('comments/update', {comment: comment});
  },
  updateCommentPost: async function (req, res) {
    // 1, 2
    let payload = req.body;
    payload.id = parseInt(req.params.id);
    let created = await commentsModel.update(req.body);
    // 3
    if (!created) {
      res.send('There was an error');
    }
    res.redirect(301, '/comments');
  }
}

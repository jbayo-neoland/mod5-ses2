// 1.1
const commentsModel = require('../../models/comments');


module.exports = {
  deleteComment: async function (req, res) {
    // 1, 2
    let deleted = await commentsModel.delete(req.params.id);
    // 3
    if (!deleted) {
      res.send('There was an error');
    }
    res.redirect(301, '/comments');
  }
}

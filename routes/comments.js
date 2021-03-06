var express = require('express');
var router = express.Router();
// 1.1
const commentsModel = require('../models/comments');

commentsModel.find();
/* GET comments listing. */
router.get('/', async function(req, res, next) {
  // 1.2
  let comments = await commentsModel.find();
  // 2
  res.render('comments', {title:"List of comments", listComments: comments });
});

module.exports = router;

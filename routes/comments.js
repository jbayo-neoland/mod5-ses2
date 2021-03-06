var express = require('express');
var router = express.Router();
const listController = require('../controllers/comments/list')

/* GET comments listing. */
router.get('/', listController.listComments);
router.get('/create', function (req, res) {
  res.send('you are creating a comment')
});

module.exports = router;

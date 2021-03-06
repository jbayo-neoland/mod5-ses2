var express = require('express');
var router = express.Router();
const listController = require('../controllers/comments/list')
/* GET comments listing. */
router.get('/', listController.listComments);

module.exports = router;

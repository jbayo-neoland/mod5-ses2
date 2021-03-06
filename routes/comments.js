var express = require('express');
var router = express.Router();
const listController = require('../controllers/comments/list')
const createController = require('../controllers/comments/create')

/* GET comments listing. */
router.get('/', listController.listComments);
// GET create comment => renders the view
router.get('/create', createController.createCommentGet);

/* GET comments listing. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.send(JSON.stringify(req.params));
});

// POST create comment => processes the data of a form
router.post('/create', createController.createCommentPost);

module.exports = router;

var express = require('express');
var router = express.Router();
const listController = require('../controllers/comments/list')
const createController = require('../controllers/comments/create')
const detailController = require('../controllers/comments/detail')
const updateController = require('../controllers/comments/update')


/* GET comments listing. */
router.get('/', listController.listComments);
// GET create comment => renders the view
router.get('/create', createController.createCommentGet);

// POST create comment => processes the data of a form
router.post('/create', createController.createCommentPost);

/* GET comments listing. */
router.get('/:id', detailController.detailComment);

/* GET comments listing. */
router.get('/:id/edit', updateController.updateCommentGet);


module.exports = router;

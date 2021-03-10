var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get(/.*fly$/, function(req, res, next) {
  console.log(`callback 1`, req.app.locals.patata);
  req.app.locals.patata = 'frita';
  next();
}, function(req, res, next) {
  console.log(`callback 2`,req.app.locals.patata);
  next();
}, function(req, res, next) {
  console.log(`callback 3`,req.app.locals.patata);
  res.send(JSON.stringify(req.params));
});

module.exports = router;

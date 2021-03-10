var express = require('express');
var router = express.Router();

const c1 = function(req, res, next) {
  console.log(`callback 1`, req.app.locals.patata);
  req.app.locals.patata = 'frita';
  next();
};
const c2 = function(req, res, next) {
  console.log(`callback 2`, req.app.locals.patata);
  next();
}
const c3 = function(req, res, next) {
  console.log(`callback 3`, req.app.locals.patata);
  res.send(JSON.stringify(req.params));
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {users: [{name: 'Sunil'}, {name: 'Mónica'}, {name: 'Luis'}, {name: 'Jacobo'}]});
});
router.get(
  /.*fly$/,
  [c1,
  c2,
  c3]
);

module.exports = router;

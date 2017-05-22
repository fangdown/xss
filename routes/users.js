var express = require('express');
var router = express.Router();

var comments = {};
function html_encode( str ){
	var s = '';
	if(str && str.length == 0) return '';
	s = str.replace(/&/g, '&amp;');
	s = s.replace(/</g, '&lt;');
	s = s.replace(/>/g, '&gt;');
	s = s.replace(/\s/g, '&nbsp;');
	s = s.replace(/\'/g, '&#39;');
	s = s.replace(/\"/g, '&quot;');
	s = s.replace(/\n/g, '<br>');
	return s;
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({
  	xss: req.query.xss
  })
});

router.get('/setComment', function(req, res, next) {
  //comments.v = html_encode(req.query.comment);
  comments.v = req.query.comment;
});
router.get('/getComment', function(req, res, next) {
  res.json({
  	comment: comments.v
  })
});
module.exports = router;

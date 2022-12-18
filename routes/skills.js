var express = require('express');
var router = express.Router();


 var express = require('express');
 var router = express.Router();

 var skillsCtrl = require('../controllers/skills');


 router.get('/', skillsCtrl.index);
 router.get('/:frontEnd', skillsCtrl.show);



module.exports = router;

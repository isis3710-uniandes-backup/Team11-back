var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');


/* GET users listing. */
router.get('/', function(req, res, next) {
    jsonfile.readFile('./persistence/Novelas.json',(err,obj)=>{
        res.send(obj);
    });
});

router.post('/', function(req, res, next) {
    jsonfile.readFile('./persistence/Novelas.json',(err,obj)=>{
        obj.push(req.body);
        jsonfile.writeFile('./persistence/Novelas.json', obj, function(err) {
            if (err) throw err;
        });
        res.send(obj);
    });
});

module.exports = router;
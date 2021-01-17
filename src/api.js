const router = require("express").Router();
const path = require('path');
const fs = require('fs');

router.get('/projects', (req,res,next) => {
  return fs.readFile(path.join(__dirname, 'projects.json'), (err, data) => {
    if(err) {
      next(err);
    }
    res.status(200).send(data);
  });
});

router.get('/resume', (req,res,next) => {
  return fs.readFile(path.join(__dirname, 'resume.json'), (err, data) => {
    if(err) {
      next(err);
    }
    res.status(200).send(data);
  });
});

module.exports = router;

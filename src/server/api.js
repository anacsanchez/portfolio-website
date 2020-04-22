const router = require("express").Router();
const projects = require('./projects.json');
const resume = require('./resume.json');
const path = require('path');

router.get('/projects', (req,res,next) => {
  if(!projects) {
    next(new Error("Error fetching projects"));
  }
  else {
    res.status(200).send(projects);
  }
});

router.get('/resume', (req,res,next) => {
  if(!resume) {
    next(new Error("Error fetching resume"));
  }
  else {
    res.status(200).send(resume);
  }
});

module.exports = router;

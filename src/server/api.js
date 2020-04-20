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

router.get('/resume/download', (req,res,next) => {
  return res.sendFile('Ana_Sanchez-Resume.pdf', {
    root: path.join(__dirname, '..','..','public')
  },
  (err) => {
        if(err) {
          next(err);
        }
        else {
          console.log('File sent successfully');
        }
      }
    );
});

module.exports = router;

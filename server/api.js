const router = require("express").Router();
const projects = require('./projects.json');

router.get('/projects', (req,res,next) => {
  res.status(200).send(projects);
});

module.exports = router;

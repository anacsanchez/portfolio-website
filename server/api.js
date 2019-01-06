const router = require("express").Router();
module.exports = router;

router.get('/', (req,res) => {
  console.log("hits api")
})

router.post('/email', (req,res) => {
  console.log(req.body)
  res.end();
})

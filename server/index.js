const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const router = require("./api.js")
module.exports = app;

app.use(morgan('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use("/api", router)

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get(/^#/, (req,res) => {
  console.log("no")
})

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

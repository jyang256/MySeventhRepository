const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const lodash = require('lodash');
const lodashId = require('lodash-id');
const createBetterId = require('../../demos/express/restful-backend/better-id');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('../../data/students.json');

// TODO: Part 2, import api-routes

const port = 8001;

const db = low(adapter);
db._.mixin(lodashId);
db._.mixin({ createId: createBetterId });
db.defaults({ students: [] });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// TODO: Part 2, use api-routes, with an appropriately versioned path

// TODO: Part 1, add core routes

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send();
});

app.listen(port, () => {
  console.log(`RESTful Students Server running on ${port}.`);
});

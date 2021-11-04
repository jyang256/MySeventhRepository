const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const lodash = require('lodash');
const lodashId = require('lodash-id');
const createBetterId = require('./better-id');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('../../../data/movies.json');

const minimalRouter = require('./routes/minimal-routes');
const apiRouter = require('./routes/api-routes');
const port = 5000;

const db = low(adapter);
db._.mixin(lodashId);
db._.mixin({ createId: createBetterId });
db.defaults({ movies: [] });

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

app.use('/minimal', minimalRouter);
app.use('/api/v1', apiRouter(db));

app.get('/', (req, res) => {
  console.log('Home route');
  res.sendFile('home.html', { root: 'views' });
});

app.get('*', (req, res) => {
  console.log('Bad route');
  res.status(404).send('Unknown route');
});

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
  console.log(`RESTful backend demo on port ${port}.`);
});

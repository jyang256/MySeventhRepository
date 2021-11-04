let express = require('express');
let router = express.Router();
let moviesRouter = require('./movie-routes');

/*
 *
 * Why the extra complexity?
 * Imagine adding APIs for actors, directors, writers, genres, etc.
 * Each of those could be its own separate routing file, and you could
 * register them here.
 *
 * Similarly, you could move the versioning of the API here, if needed.
 *
 */

module.exports = function (db) {
  router.use(moviesRouter(db));
  return router;
};

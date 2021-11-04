// @ts-check
let express = require('express');
let router = express.Router();
let lodash = require('lodash');

const fields = ['title', 'year', 'writer', 'director', 'genres', 'rating'];

module.exports = function (db) {
  router
    .route('/movies')
    .get((req, res) => {
      let movies = db.get('movies').value();
      if (req.query) {
        let keys = lodash.intersection(Object.keys(req.query, fields));

        // Probably a better, optimal way to do this
        // Treats multiple fields as condition1 && condition2
        for (let key of keys) {
          movies = movies.filter((movie) => {
            let value = movie[key];
            if (Array.isArray(value)) {
              return value.join('/').includes(req.query[key]);
            } else if (typeof value === 'string') {
              return value.includes(req.query[key]);
            } else {
              return value === req.query[key];
            }
          });
        }
      }
      res.send(movies);
    })
    .post((req, res) => {
      const movie = req.body;

      // Do validation here
      // e.g. are all the fields present with nominal values?

      res.send(db.get('movies').insert(movie).write());
    });

  router
    .route('/movies/:id')
    .patch((req, res) => {
      res.send(
        db.get('movies').find({ id: req.params.id }).assign(req.body).write()
      );
    })
    .delete((req, res) => {
      db.get('movies').remove({ id: req.params.id }).write();
      res.status(204).send();
    })
    .get((req, res) => {
      const result = db
        .get('movies')
        .find({ id: Number(req.params.id) })
        .value();
      if (result) {
        res.send(result);
      } else {
        res.status(404).send();
      }
    });

  return router;
};

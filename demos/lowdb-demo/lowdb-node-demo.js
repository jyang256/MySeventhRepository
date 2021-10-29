const low = require('../../node_modules/lowdb');
const FileSync = require('../../node_modules/lowdb/adapters/FileSync');

const adapter = new FileSync('../../data/movies.json');
const db = low(adapter);
db.defaults({ movies: [] });
console.log('has: ', db.get('movies').value());
console.log('Movie 1:', db.get('movies').find({ id: 1 }).value());

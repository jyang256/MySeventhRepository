//@ts-check
import { movies } from '../../data/movies-module.js';
import { LowSync } from './node_modules/lowdb/lib/LowSync.js';
import { LocalStorage } from './node_modules/lowdb/lib/adapters/LocalStorage.js';
import * as lodash from '../../node_modules/lodash-es/lodash.js';

let adapter = new LocalStorage(movies);
let db = new LowSync(adapter);
db.read();
db.data ||= { movies };
db.chain = lodash.chain(db.data);

console.log('db:', db);
console.log('Movie 1:', db.chain.get('movies').find({ id: 1 }).value());

console.log('Finished');

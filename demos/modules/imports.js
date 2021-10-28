/* eslint-disable */

// import {a} from './exports.js';

// Import one item; typical
import { x } from './exports.js';
console.log(x); // 10

// Import multiple items; typical
import { a, d } from './exports.js';

// Import and rename
import { b as bee } from './exports.js';
console.log(bee); // 2

// Rename one, not the other
import { x as q, y } from './exports.js';
console.log(q + y);

// Import everything into a namespace
import * as foo from './exports.js';
console.log(foo.x); // 10
console.log('foo is ', foo);

// Runs exports.js, does not import any values
import './exports.js';

// Empty import, pointless
import {} from './exports.js';

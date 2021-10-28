/* eslint-disable no-unused-vars */
const names = [ 'John', 'Dan', 'Tim' ];

const [ first, second, third ] = names;
console.log( first ); // John

const [ f1, , f3 ] = names;

const moreNames = [ 'Andreina', 'Hector', 'Andres' ];

// Don't do this, adds moreNames as a single element array
// names.push( moreNames );

// This is better, unwinds/spreads the array into its constituent elements
names.push( ...moreNames );

// Cheap copy (shallow)
const copiedNames = [ ...names ];

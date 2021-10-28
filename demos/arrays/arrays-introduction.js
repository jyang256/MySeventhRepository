/* eslint-disable no-unused-vars */

// If you know your array is going to be large
const largeArray = new Array( 10000 );

//                0     1     2     3     4
const states = [ 'NJ', 'MA', 'CA', 'IL', 'FL' ];

// Assign directly to an index.
states[3] = 'AK';

// How big is this array?
console.log( states.length );

// Try not to do this
// states[20] = 'HI';

// Add to the end of the array
states.push( 'WA' );

states.push( 'TX', 'CO', 'DE' );
states.push( [ 'OR', 'WA', 'ID' ] );
states.push( ...[ 'OR', 'WA', 'ID' ] );

// states is now one element shorter
const lastElement = states.pop();

// Add to the beginning or front of the array
states.unshift( 'CT' );

// states is another element shorter
const firstElement = states.shift();

// states.splice(start, length?, replacement?);
// Delete two elements
states.splice( 1, 2 );

// Insert three elements at position 2
states.splice( 2, 0, 'AR', 'AZ', 'CO' );

// Replace the element at position 4
states.splice( 4, 1, 'DE' );
// states[4] = 'DE';

// Sort the array
// in-place
states.sort();

// Create a copy
const sortedStates = [ ...states ].sort();
states.sort().reverse();

// Easy numeric sort
states.sort( ( a, b ) => b - a );

// Get a slice of the array
states.slice( 2 );
states.slice( 2, 4 );
states.slice( 1, -2 );

// Return as a string
states.join( '|' );

// Find something, returns an index if found, -1 if not
states.indexOf( 'NJ' );
states.lastIndexOf( 'NJ' );

// Find as a boolean
states.contains( 'NJ' );

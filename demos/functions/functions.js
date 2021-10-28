/* eslint-disable no-unused-vars */

// Come back to this after talking about how to declare functions
basicAdd(); // works
// assignedAdd(); // fails

// Function declaration: hoisted
function basicAdd() {
  return 2 + 2;
}

// Function expression: not hoisted
const assignedAdd = function() {
  return 2 + 2;
};

// Arrow function
// More on this in another file
const arrowAdd = () => 2 + 2;

const arrowWithArgs = ( x, y ) => {
  x = x * 2;
  y = y / 2;
  return x + y;
};

// Function references can be copied
const otherAdd = basicAdd;

// Typical function
function add( x, y ) {
  return x + y;
}

// Default parameter values
function addDefaults( x = 0, y = 10 ) {
  return x + y;
}

addDefaults( 5 ); // 15

// Function signatures are not enforced in JavaScript
// Allowed
addDefaults( 5, 7 ); // 12
addDefaults( 1, 2, 3, 4, 5 ); // 3
addDefaults( undefined, 5 ); // 5
addDefaults( 1 ); // 11
addDefaults(); // 10

// Rest parameters
// The "rest" of the values
function addRest( x = 0, y = 0, ...otherParams ) {
  console.log( 'Other params: ', otherParams );
  let total = 0;
  for ( const x of otherParams ) {
    total = total + x;
  }
  return x + y + total;
}

// Works
addRest( 1, 2, 3, 4, 5 );
addRest( 10, undefined, 4, 8, 12 );

function getAllParameters( ...params ) {
  // params is an array of all arguments
}

getAllParameters( 1, 2, 3 );
getAllParameters( 'John', 30, true, [ 'a', 'b', 'c' ] );

// Can just vaccuum up all arguments into one array
function addAll( ...numbers ) {
  let total = 0;
  for ( const x of numbers ) {
    if ( typeof x === 'number' ) {
      total = total + x;
    }
  }
  return total;
}

addAll( 1, 2, 3, 4, 5 );

// Functions can return functions
function getGreeter() {
  return function() {
    console.log( 'Greetings!' );
  };
}

const greeter = getGreeter();
greeter();

const getCustomGreeter = function( name ) {
  return function() {
    console.log( 'Greetings,', name );
  };
};

const customGreeter = getCustomGreeter( 'John' );
customGreeter();

function calculator( x, y, op ) {
  return op( x, y );
}

const result = calculator( 5, 10, function( a, b ) {
  return a + b;
} );

// Real-world example of passing a function to another function
window.addEventListener( 'click', function( event ) {
  console.log( 'You clicked on the button!' );
} );

// JavaScript only has manual-style overloading, not as a language feature
function overloaded( x, y ) {
  if ( typeof x === 'string' ) {
    // do this
  } else if ( typeof x === 'number' ) {
    // do something else
  }
}

// Kinda sorta multiple return values, syntactically speaking
function opAll( x, y ) {
  return [ x + y, x - y, x * y, x / y ];
}

const x = 10;
const y = 20;
const [ sum, difference, product, dividend ] = opAll( x, y );
console.log( `Adding ${x} and ${y} yields ${sum}` );

function foo() {
  return 'Called foo()';
}

console.log( foo ); // prints foo.toString()
console.log( foo() ); // Calls foo(), prints return value

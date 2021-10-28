/* eslint-disable no-unused-vars */

const states = [ 'NJ', 'MA', 'CA', 'IL', 'FL' ];

// Iterator functions usually take a callback/predicate with this signature
// (item, index, array) => void
// No breaking, unfortunately
states.forEach( ( item, index, array ) => {
  console.log( `${item} can be found at index ${index}.` );
} );

// Return false all the way through, some() returns false
// Return true internally, break, and some() returns true
const statesContainA = states.some( ( item, index, array ) => {
  if ( item.includes( 'A' ) ) {
    // Keep looping
    return false;
  } else {
    // Stop looping, effectively a break
    return true;
  }
} );

const statusLengthTwo = states.every( ( item, index, array ) => {
  if ( item.length === 2 ) {
    // Keep looping, if this never returns false, every() returns true
    return true;
  } else {
    // Stop looping, every() also returns false
    return false;
  }
} );

const result = [ 2, 4, 6, 8 ].every( ( x ) => {
  if ( x % 2 > 0 ) {
    return false;
  }

  return true;
} );

// Returns an array of matches, [] if none
const filteredStates = states.filter( ( state ) => state.contains( 'A' ) );

// Returns the first matching item, null if none
const firstStateWithA = states.find( ( state ) => state.contains( 'A' ) );

// Iterate over every element in the array, do something to it,
// Return a new array with the processed results
const mappedArray = states.map( ( state ) => state.toLowerCase() );

const people = [
  {
    firstName: 'John',
    lastName: 'Paxton',
    state: 'NJ',
  },
  {
    firstName: 'Dann',
    lastName: 'Russo',
    state: 'MA',
  },
];

// Bad, modifies original values
const badMappedPeople = people.map( ( person ) => {
  person.state = person.state.toLowerCase();
  return person;
} );

// Better
const mappedPeople = people.map( ( person ) => {
  // Shallow copy!
  // const copiedPerson = { ...person };
  const copiedPerson = Object.assign( {}, person );

  copiedPerson.state = copiedPerson.state.toLowerCase();
  return copiedPerson;
} );

const numbers = [ 1, 2, 3, 4, 5, 6, 7 ];
const sum = numbers.reduce( ( previous, current, index, array ) => {
  return previous + current;
}, 0 );

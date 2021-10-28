const baseURL = 'http://localhost:8000/api/zippay/v1/users?_delay=3000';

const fetchPromise = fetch( baseURL );

// fetchPromise.then(onSuccess?, onError?);

const responsePromise = fetchPromise.then( handleResponse );
const catchPromise = responsePromise.then( handleUsers );
// const endPromise = catchPromise.then( null, handleError );
const endPromise = catchPromise.catch( handleError );
endPromise.finally( () => {} );

function handleResponse( response ) {
  // response.status >= 200 && response.status < 400
  if ( response.ok ) {
    return response.json(); // Technically returns a Promise!
  } else {
    throw new Error( 'Could not find users' );
    // return Promise.reject( 'Could not find users' );
  }
}

function handleUsers( users ) {
  console.log( `There are ${users.length} users.` );
}

function handleError( error ) {
  console.error( 'Something went wrong: ', error );
}

/*
fetch( baseURL ).then( handleResponse )
  .then( handleUsers )
  .catch( handleError );
*/

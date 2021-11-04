const lodash = require('lodash');

function createBetterId(collection, doc) {
  return lodash.maxBy(collection, 'id').id + 1;
}

module.exports = createBetterId;

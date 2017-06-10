const isEqual = require('../isEqual.js');

require('chai').should();

describe('isEqual', function() {
  it('should return true with equal values', function() {
    isEqual(1, 1).should.be.true;
  });

  it('should return false with unequal values', function () {
    isEqual(1, 2).should.be.false;
  });
});

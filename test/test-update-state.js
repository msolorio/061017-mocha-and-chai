const updateState = require('../updateState').func;
const state = require('../updateState').state;

require('chai').should();

describe('doing nothing', function() {
  it('should not update state', function() {
    state.view.should.equal('originalView');
  });
});

describe('updateState', function() {
  it('should updateState', function() {
    updateState();
    state.view.should.equal('newState');
  });
});

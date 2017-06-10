let state = {
  view: 'originalView'
};

const func = function() {
  state.view = 'newState';
} 

module.exports = { 'func': func, 'state': state };

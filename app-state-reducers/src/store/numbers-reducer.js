const defaultState = { currentNumber: 0 };

export default (state = defaultState, {type, payload}) => {
  switch ( type ) {
  case 'RESET':
    return { currentNumber: defaultState.numbers };
  case 'CHANGE':
    return { currentNumber: Math.random() };
  default:
    return state;
  }
};

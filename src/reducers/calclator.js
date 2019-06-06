import * as ActionTypes from '../actions/ActionTypes';

const InitialState = {
  inputValue: 0,
  resultValue: 0,
  showResult: false,
};

const calclator = (state = InitialState, action) => {
  switch(action.type) {
    case ActionTypes.INPUT_NUMBER:
      console.log(action.number);
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showResult: false,
      };
    case ActionTypes.PLUS:
      console.log('Click plus');
      return {
        ...state,
        inputValue: 0,
        resultValue: state.resultValue + state.inputValue,
        showResult: true,
      };
    default:
      return state;
  }
}

export default calclator;
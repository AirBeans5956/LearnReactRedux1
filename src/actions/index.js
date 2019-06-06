import * as ActionType from './ActionTypes';

export const onNumClick = (number) => ({
  type: ActionType.INPUT_NUMBER,
  number: number,
})

export const onPlusClick = () => ({
  type: ActionType.PLUS,
})
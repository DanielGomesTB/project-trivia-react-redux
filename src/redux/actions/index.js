export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_CALC = 'ADD_CALC';
export const NEW_CATEGORY = 'NEW_CATEGORY';

export const addPlayer = (payload) => ({
  type: ADD_PLAYER,
  payload,
});

export const addCalc = (payload) => ({
  type: ADD_CALC,
  payload,
});

export const changeCategory = (payload) => ({
  type: NEW_CATEGORY,
  payload,
});

import axios from 'axios';

// CONSTANTS
const RECEIVE_ALL_CLOTHINGS = 'RECEIVE_ALL_CLOTHINGS';

// ACTION CREATORS
const receiveAllClothings = (allClothings) => ({ type: RECEIVE_ALL_CLOTHINGS, allClothings})

// THUNK ACTION CREATORS
export const getAllClothings = () => {
  return dispatch =>
    axios.get('/clothing')
      .then(res => res.data)
      .then(allClothings => {
        dispatch(receiveAllClothings(allClothings));
      });
};

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_CLOTHINGS:
      return action.allClothings;
    default:
      return state;
  }
}

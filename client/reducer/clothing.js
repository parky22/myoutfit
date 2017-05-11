import axios from 'axios';

// CONSTANTS
const RECEIVE_ALL_CLOTHINGS = 'GET_ALL_CLOTHINGS';

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

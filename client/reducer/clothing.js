import axios from 'axios';

// CONSTANTS
const RECEIVE_ALL_CLOTHINGS = 'RECEIVE_ALL_CLOTHINGS';

// ACTION CREATORS
const receiveAllClothings = allClothings => ({ type: RECEIVE_ALL_CLOTHINGS, allClothings})

// THUNK ACTION CREATORS
export const getAllClothings = () => {
  return dispatch =>
    axios.get('/api/clothing')
      .then(res => res.data)
      .then(allClothings => {
        console.log('GOT ALL THE CLOTHES', allClothings);
        dispatch(receiveAllClothings(allClothings));
      })
      .catch(error => console.error(error));
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

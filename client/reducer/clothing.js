import axios from 'axios';
import { browserHistory } from 'react-router';

// CONSTANTS
const RECEIVE_ALL_CLOTHINGS = 'RECEIVE_ALL_CLOTHINGS';
const CREATED_CLOTHING = 'CREATED_CLOTHING';
const SELECTED_CLOTHING = 'SELECTED_CLOTHING';

// ACTION CREATORS
const receiveAllClothings = allClothings => ({ type: RECEIVE_ALL_CLOTHINGS, allClothings });
const createdClothing = madeClothing => ({ type: CREATED_CLOTHING, madeClothing });
const selectedClothing = selectedClothing => ({ type: SELECTED_CLOTHING, selectedClothing});

// THUNK ACTION CREATORS
export const getAllClothings = () => {
  return dispatch => {
    return axios.get('/api/clothing')
    .then(result => result.data)
    .then(allClothings => {
      dispatch(receiveAllClothings(allClothings));
    })
    .catch(err => console.error(err));
  }
};

export const addClothing = clothesToAdd => {
  return dispatch => {
    return axios.post('/api/clothing', clothesToAdd)
    .then(result => result.data)
    .then (madeClothing => {
      dispatch(createdClothing(madeClothing));
      //browserHistory.push(`/piece/${madeClothing.id}`)
    })
    .catch(err => console.error(err));
  }
}

export const selectedPiece = pieceId => {
  return dispatch => {
    return axios.get(`api/clothing/${pieceId}`)
      .then(result => result.data)
      .then(foundPiece => {
        dispatch(selectedClothing(foundPiece));
      });
  }
}

// REDUCER
const initialClothingState = {
  allClothings: [],
  madeClothing: {},
  selectedClothing: {}
}

export default function (state = initialClothingState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_CLOTHINGS:
      newState.allClothings = action.allClothings;
      break;
    case CREATED_CLOTHING:
      newState.madeClothing = action.madeClothing;
      break;
    case SELECTED_CLOTHING:
      newState.selectedClothing = action.selectedClothing;
    default:
      return state;
  }
  return newState;
}

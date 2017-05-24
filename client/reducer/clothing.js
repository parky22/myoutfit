import axios from 'axios';

// CONSTANTS
const RECEIVE_ALL_CLOTHINGS = 'RECEIVE_ALL_CLOTHINGS';
const CREATED_CLOTHING = 'CREATED_CLOTHING';
const SELECTED_CLOTHING = 'SELECTED_CLOTHING';
const RECEIVE_OUTFIT = 'RECEIVE_OUTFIT';

// ACTION CREATORS
const receiveAllClothings = allClothings => ({ type: RECEIVE_ALL_CLOTHINGS, allClothings });
const createdClothing = madeClothing => ({ type: CREATED_CLOTHING, madeClothing });
const receiveOutfit = outfit => ({ type: RECEIVE_OUTFIT, outfit });

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
    })
    .catch(err => console.error(err));
  }
}

export const getOutfit = () => {
  return dispatch => {
    return axios.get('/api/clothing')
      .then(result => result.data)
      .then(clothings => {
        const outfit = clothings.filter((clothing) => {
          return clothing.clothingType === 'pants' || clothing.clothingType === 'other'
        });
        dispatch(receiveOutfit(outfit));
      })

  }
}

// REDUCER
const initialClothingState = {
  allClothings: [],
  madeClothing: {},
  selectedClothing: {},
  outfit: []
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
      break;
    case RECEIVE_OUTFIT:
      newState.outfit = action.outfit;
      break;
    default:
      return state;
  }
  return newState;
}

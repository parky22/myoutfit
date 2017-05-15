import { combineReducers } from 'redux';
import user from './user';
import allClothings from './clothing';

export default combineReducers({ user, allClothings });

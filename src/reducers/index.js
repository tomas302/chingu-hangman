import { combineReducers } from 'redux'
import game from './game';
import word from './word';
import failure from './failure';

export default combineReducers({
    game,
    word,
    failure
})
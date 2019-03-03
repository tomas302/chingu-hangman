import { combineReducers } from 'redux'
import game from './game';
import word from './word';
import alphabet from './alphabet';
import failures from './failure';

export default combineReducers({
    game,
    word,
    alphabet,
    failures
})
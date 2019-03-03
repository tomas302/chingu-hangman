import { wrongLetter } from '../actions/';

export default function word(state = "", action) {
    switch(action.type) {
        case('START_GAME'):
            return action.secretWord;
        case('SET_WORD'):
            let regex = /((?![A-z]).)*/g;
            return action.word.replace(regex, "");
        case('LETTER_GUESSED'):
            let isContained = state.includes(action.letter);
            if (!isContained) {
                action.dispatch(wrongLetter());
            }
            return state
        default:
            return state;
    }
};
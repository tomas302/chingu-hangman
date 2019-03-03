const INITIAL = 0;
const CORRECT = 1;
const WRONG = -1;

const getDefaultState = () => {
    let defaultState = [];
    for (let i = 0; i < 26; i++) { defaultState.push(INITIAL) }
    return defaultState;
} 

export default function alphabet(state = getDefaultState(), action) {
    let newState;
    switch(action.type) {
        case('CORRECT_LETTER'):
            newState = state.slice();
            newState[action.letterIndex] = CORRECT;
            return newState;
        case('WRONG_LETTER'):
            newState = state.slice();
            newState[action.letterIndex] = WRONG;
            return newState;
        case('RESET_GAME'):
            return getDefaultState();
        case('RESET_APP'):
            return getDefaultState();
        default:
            return state;
    }
};
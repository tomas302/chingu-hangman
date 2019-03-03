const INITIAL = 0;
const CORRECT = 1;
const WRONG = -1;

const defaultState = [];
for (let i = 0; i < 26; i++) { defaultState.push(INITIAL) } 

export default function alphabet(state = defaultState, action) {
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
        default:
            return state;
    }
};
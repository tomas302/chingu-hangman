export default function wrong(state = [], action) {
    switch(action.type) {
        case('SET_WORD'):
            return [];
        case('WRONG_LETTER'):
            return state.push(action.letter);
        default:
            return state;
    }
};
export default function correct(state = 0, action) {
    switch(action.type) {
        case('SET_WORD'):
            return 0;
        case('CORRECT_LETTER'):
            return state + 1;
        default:
            return state;
    }
};
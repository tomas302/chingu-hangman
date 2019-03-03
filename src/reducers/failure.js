export default function failure(state = 0, action) {
    switch(action.type) {
        case('SET_WORD'):
            return 0;
        case('WRONG_LETTER'):
            return (state === 6) ? 6 : state + 1;
        case('RESET_APP'):
            return 0;
        case('RESET_GAME'):
            return 0;
        default:
            return state;
    }
};
export default function failure(state = 0, action) {
    switch(action.type) {
        case('WRONG_LETTER'):
            return (state === 6) ? 6 : state + 1;
        default:
            return state;
    }
};
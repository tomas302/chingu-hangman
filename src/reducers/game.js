
const defaultState = { playing: false, isWinner: false, owner: '', uuid: '' };

export default function game(state = defaultState, action) {
    switch(action.type) {
        case('START_GAME'):
            return { playing: true, isWinner: false };
        case('END_GAME'):
            return { playing: false, isWinner: action.isWinner };
        case('SET_WORD'):
            return { playing: true, isWinner: false };
        default:
            return state;
    }
};
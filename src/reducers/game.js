
const defaultState = { playing: false, isWinner: false, owner: '', uuid: '' };

export default function game(state = defaultState, action) {
    switch(action.type) {
        case('START_GAME'):
            return { ...state, playing: true, isWinner: false };
        case('END_GAME'):
            return { ...state, playing: false, isWinner: action.isWinner };
        case('SET_WORD'):
            return { ...state, playing: true, isWinner: false };
        case('SET_OWNER'):
            return { ...state, owner: action.owner }
        default:
            return state;
    }
};
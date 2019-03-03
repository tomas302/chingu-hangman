
const defaultState = { playing: false, gameEnded: false, isWinner: false, owner: '' };

export default function game(state = defaultState, action) {
    switch(action.type) {
        case('START_GAME'):
            return { ...state, playing: true, isWinner: false };
        case('END_GAME'):
            return { ...state, playing: false, isWinner: action.isWinner, gameEnded: true };
        case('SET_WORD'):
            return { ...state, playing: true, isWinner: false };
        case('SET_OWNER'):
            return { ...state, owner: action.owner }
        case('RESET_GAME'):
            return { ...defaultState, owner: state.owner };
        case('RESET_APP'):
            return { defaultState };
        default:
            return state;
    }
};
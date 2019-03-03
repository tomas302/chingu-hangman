export default function word(state = "", action) {
    switch(action.type) {
        case('SET_WORD'):
            let regex = /((?![A-z]).)*/g;
            return action.word.replace(regex, "");
        default:
            return state;
    }
};
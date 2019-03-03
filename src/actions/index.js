// game life cycle
export const startGame = (secretWord) => ({
    type: 'START_GAME',
    secretWord: secretWord
});

// game life cycle
export const endGame = (isWinner) => ({
    type: 'END_GAME',
    isWinner: isWinner
});

export const setOwner = (owner) => {
    return {
        type: 'SET_OWNER',
        owner: owner
    }
};

// word actions
export const setWord = (word) => {
    return {
        type: 'SET_WORD',
        word: word
    }
};

export const letterGuessed = (letter) => {
    return {
        type: 'LETTER_GUESSED',
        letter: letter
    }
};

// failure counter
export const wrongLetter = (letter) => ({
    type: 'WRONG_LETTER',
    letter: letter
});
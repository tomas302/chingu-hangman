// game life cycle
export const startGame = () => ({
    type: 'START_GAME'
});

export const endGame = (isWinner) => ({
    type: 'END_GAME',
    isWinner: isWinner
});

export const resetGame = () => ({
    type: 'RESET_GAME'
});

export const resetApp = () => ({
    type: 'RESET_APP'
});

export const setOwner = (owner) => ({
    type: 'SET_OWNER',
    owner: owner
});

// word actions
export const setWord = (word) => ({
    type: 'SET_WORD',
    word: word
});

export const letterGuessed = (letter) => ({
    type: 'LETTER_GUESSED',
    letter: letter
});

// correct
export const correctLetter = (letterIndex) => ({
    type: 'CORRECT_LETTER',
    letterIndex: letterIndex
});

// failure counter
export const wrongLetter = (letterIndex) => ({
    type: 'WRONG_LETTER',
    letterIndex: letterIndex
});
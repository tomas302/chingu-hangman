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

// failure counter
export const wrongLetter = (letter) => ({
    type: 'WRONG_LETTER',
    letter: letter
});
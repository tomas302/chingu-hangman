import * as firebase from 'firebase/app';

import 'firebase/database';

let config = {
    apiKey: "AIzaSyBn4qbTxWXdL3SgY6JofFwfXBMaS-W1jqc",
    authDomain: "hangman-768d0.firebaseapp.com",
    databaseURL: "https://hangman-768d0.firebaseio.com",
    projectId: "hangman-768d0",
    storageBucket: "hangman-768d0.appspot.com",
    messagingSenderId: "728911708272"
};
firebase.initializeApp(config);
let database = firebase.database();

function writeNewGame(owner) {
    // A game entry.
    var gameData = {
      owner: owner
    };
  
    // Get a key for a new Game.
    var newGameKey = database.ref().child('games').push().key;
    var updates = {};
    updates['/games/' + newGameKey] = gameData;
  
    return database.ref().update(updates);
}
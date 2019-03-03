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

const writeNewGame = (id, word, owner) => {
    // A game entry.
    var gameData = {
      id: id,
      word: word,
      owner: owner
    };

    var updates = {};
    updates['/games/' + id] = gameData;
  
    return database.ref().update(updates);
};

const getGameData = async (id) => {

  let data = await firebase.database().ref('/games/' + id).once('value').then(function(snapshot) {
    return snapshot.val();
  });
  console.log(data);
  return data;
};

export { writeNewGame, getGameData };
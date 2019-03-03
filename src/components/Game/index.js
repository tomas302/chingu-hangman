import React, { Component } from 'react';
import NavBar from '../NavBar/';
import MainWord from '../../containers/word';
import HangMan from '../HangMan/';
import InputWordPopup from '../InputWordPopup/';
import EndGamePopup from '../EndGamePopup/';
import WrongLetters from '../WrongLetters/';
import { Container, Row, Col } from 'reactstrap';

// Redux actions
import { startGame, endGame, resetGame, resetApp, setWord, setOwner, correctLetter, wrongLetter } from '../../actions/';

// Firebase API
import { writeNewGame, getGameData } from '../../API';

import "./Game.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MAIN_URL = "https://tomas302.github.io/chingu-hangman/?game=";


const getUrlVars = () => {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shareLink: ''
        };

        if (getUrlVars()['game']) {
            this.state.shareLink = MAIN_URL+getUrlVars()['game'];
        }

        this.checkForShare = this.checkForShare.bind(this);
        this.setWord = this.setWord.bind(this);
        this.setOwner = this.setOwner.bind(this);
        this.letterClicked = this.letterClicked.bind(this);
        this.win = this.win.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.share = this.share.bind(this);
    }

    componentDidMount() {
        this.checkForShare();
    }

    checkForShare() {
        if (this.state.shareLink !== '') {
            this.props.dispatch(startGame());
            getGameData(getUrlVars()['game']).then(data => {
                this.setWord(data.word);
                this.setOwner(data.owner);
            });
        }
    }

    setWord(word) {
        if (word === '' && getUrlVars()['game'] !== '') {
            this.checkForShare();
            return;
        }
        this.props.dispatch(setWord(word.toUpperCase()));
    }

    setOwner(owner) {
        this.props.dispatch(setOwner(owner));
    }

    letterClicked(index) {
        if (!this.props.playing || this.props.word === '') return;
        if (this.props.word.includes(alphabet[index])) {
            this.props.dispatch(correctLetter(index));
            let won = true;
            let word = Array.from(this.props.word);
            for (let i = 0; i < word.length; i++) {
                let indexOfLetter = alphabet.indexOf(word[i]);
                if (this.props.alphabet[indexOfLetter] !== 1) {
                    if (indexOfLetter !== index) {
                        won = false;
                        break;
                    }
                }
            }
            if (won) {
                this.win();
            }
        } else {
            this.props.dispatch(wrongLetter(index));
            if (this.props.failures === 5) {
                this.gameOver();
            }
        }
    }

    win() {
        this.props.dispatch(endGame(true));
    }

    gameOver() {
        this.props.dispatch(endGame(false));
    }

    
    share(word, owner) {
        if (word === undefined) {
            if (this.props.gameEnded && !this.props.playing)  {
                this.props.dispatch(resetGame());
            }
        } else {
            let id = '';
            for (let i = 0; i < 6; i++) {
                id = id + alphabet[Math.floor(Math.random() * alphabet.length)]
            }
            // here we call the firebase API to create a new link for our game settings
            writeNewGame(id, word, owner).then(() => {
                this.setState({
                    shareLink: MAIN_URL+id
                });
                window.history.pushState({}, document.title, "./?game=" + id);
            });
        }
    }

    render() {
        let popup = "";
        if (!this.props.playing && !this.props.gameEnded) {
            popup = <InputWordPopup shareLink={this.state.shareLink} share={this.share} setWord={this.setWord} setOwner={this.setOwner} />;
        } else if (!this.props.playing && this.props.gameEnded) {
            let corrects = 0;
            let uniqueLetters = [];
            for (let i = this.props.word.length - 1; i >= 0; i--) {
                let alreadyAdded = uniqueLetters.some(el => (el === this.props.word[i]) );
                if (!alreadyAdded) {
                    uniqueLetters.push(this.props.word[i]);
                }
            }
            for (let i = 0; i < uniqueLetters.length; i++) {
                let indexOfLetter = alphabet.indexOf(uniqueLetters[i]);
                if (this.props.alphabet[indexOfLetter] === 1) {
                    corrects++;
                }
            }
            popup = <EndGamePopup
                    playAgain={ () => { this.props.dispatch(resetGame()); this.props.dispatch(startGame()); } }
                    newGame={ () => { window.history.pushState({}, document.title, "./"); this.setState({ shareLink: '' }); this.props.dispatch(resetApp()); } }
                    share={this.share}
                    word={this.props.word}
                    corrects={corrects}
                    failures={this.props.failures}
                    isWinner={this.props.isWinner} />;
        }
        return <Container>
            { popup }
            <Row className="navbar-row">
                <Col xs="12">
                    <NavBar owner={this.props.owner} />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="4">
                    <MainWord />
                </Col>
                <Col xs="12" md="6" >
                    <HangMan failures={this.props.failures} />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <WrongLetters alphabet={this.props.alphabet} handleClick={this.letterClicked} />
                </Col>
            </Row>
        </Container>;
    }
}

export default Game;
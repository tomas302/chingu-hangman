import React, { Component } from 'react';
import NavBar from '../NavBar/';
import MainWord from '../../containers/word';
import HangMan from '../HangMan/';
import InputWordPopup from '../InputWordPopup/';
import WrongLetters from '../WrongLetters/';
import { Container, Row, Col } from 'reactstrap';

// Redux actions
import { startGame, setWord, setOwner, correctLetter, wrongLetter } from '../../actions/';

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

        this.setWord = this.setWord.bind(this);
        this.setOwner = this.setOwner.bind(this);
        this.letterClicked = this.letterClicked.bind(this);
        this.share = this.share.bind(this);
    }

    componentDidMount() {
        if (this.state.shareLink !== '') {
            this.props.dispatch(startGame());
            getGameData(getUrlVars()['game']).then(data => {
                this.setWord(data.word);
                this.setOwner(data.owner);
            });
        }
    }

    setWord(word) {
        this.props.dispatch(setWord(word.toUpperCase()));
    }

    setOwner(owner) {
        this.props.dispatch(setOwner(owner));
    }

    letterClicked(index) {
        if (this.props.failures === 6 || this.props.corrects === this.props.word.length) return;
        if (this.props.word.includes(alphabet[index])) {
            this.props.dispatch(correctLetter(index));
        } else {
            this.props.dispatch(wrongLetter(index));
        }
    }

    // here we call the firebase API to create a new link for our game settings
    share(word, owner) {
        let id = '';
        for (let i = 0; i < 6; i++) {
            id = id + alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        writeNewGame(id, word, owner).then(() => {
            this.setState({
                shareLink: MAIN_URL+id
            });
        });
    }

    render() {
        let popup = (!this.props.playing) ? <InputWordPopup shareLink={this.state.shareLink} share={this.share} setWord={this.setWord} setOwner={this.setOwner} /> : "";
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
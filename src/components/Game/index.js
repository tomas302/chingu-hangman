import React, { Component } from 'react';
import NavBar from '../NavBar/';
import MainWord from '../../containers/word';
import HangMan from '../HangMan/';
import InputWordPopup from '../InputWordPopup/';
// import WrongLetters from '../WrongLetters/';
import { Container, Row, Col } from 'reactstrap';

// Redux actions
import { setWord } from '../../actions/';

import "./Game.css";

class Game extends Component {
    constructor(props) {
        super(props);
        this.setWord = this.setWord.bind(this);
    }

    setWord(word) {
        this.props.dispatch(setWord(word));
    }

    render() {
        let popup = (!this.props.playing) ? <InputWordPopup setWord={this.setWord} /> : "";
        return <Container>
            { popup }
            <Row className="navbar-row">
                <Col xs="12">
                    <NavBar />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="4">
                    <MainWord />
                </Col>
                <Col xs="12" md="6" >
                    <HangMan failures={6} />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    {/*<WrongLetters />*/}
                </Col>
            </Row>
        </Container>;
    }
}

export default Game;
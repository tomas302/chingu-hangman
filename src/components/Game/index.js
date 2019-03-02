import React, { Component } from 'react';
import NavBar from '../NavBar/';
import MainWord from '../MainWord/';
import HangMan from '../HangMan/';
import WrongLetters from '../WrongLetters/';
import { Container, Row, Col } from 'reactstrap';
import "./Game.css";

class Game extends Component {

    render() {
        
        return <Container>
            <Row>
                <Col xs="12">
                    <NavBar />
                </Col>
            </Row>
            <Row>
                <MainWord />
                <HangMan />
            </Row>
            <Row>
                <WrongLetters />
            </Row>
        </Container>;
    }
}

export default Game;
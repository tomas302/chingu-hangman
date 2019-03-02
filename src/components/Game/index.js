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
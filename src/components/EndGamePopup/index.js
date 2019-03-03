import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './EndGamePopup.css';

const EndGamePopup = (props) => {
    let body;
    if (props.isWinner) {
        body = <>
            <ModalHeader>CONGRATULATIONS!!!</ModalHeader>
            <ModalBody style={{ textAlign: 'center' }}>
                <h3>The word is: <b>{props.word}</b></h3>
                <br />
                Total tries: <b>{props.failures + props.corrects}</b>
                <br />
                Errors: <b>{props.failures}</b>
            </ModalBody>
        </>;
    } else {
        body = <>
            <ModalHeader>GAME OVER</ModalHeader>
            <ModalBody style={{ textAlign: 'center' }}>
                <h2>You Lose</h2>
                <br />
                Correct: <b>{props.corrects}</b>
                <br />
                Errors: <b>6</b>
            </ModalBody>

        </>;
    }
    return (
        <div>
            <Modal isOpen={true}>
                {body}
                <ModalFooter>
                    <Button size="lg" onClick={props.playAgain} color="primary">Play Again</Button>
                    <Button size="lg" onClick={props.newGame} color="primary">New Word</Button>
                    <Button size="lg" onClick={ () => props.share() } color="success">Share</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default EndGamePopup;
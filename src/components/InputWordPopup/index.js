import React, { Component } from 'react'
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './InputWordPopup.css';

class InputWordPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.setWord = this.setWord.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.setWord(this.state.value);
        } else {
            let newValue = e.target.value;
            let regex = /((?![A-z]).)*/g;
            this.setState({
                value: newValue.replace(regex, "")
            });
        }
    }

    setWord() {
        this.props.setWord(this.state.value);
    }

    render() {
        return (
            <div>
                <Modal isOpen={ true } toggle={ null }>
                    <ModalHeader toggle={ null }>Enter your word</ModalHeader>
                    <ModalBody>
                        Enter the word that the other player has to guess. It has to be a single word, without spaces, numbers or symbols.
                        <Input pattern="/[A-z]/g" id="word" ref={ this._input } onKeyPress={this.handleKeyPress} onChange={this.handleKeyPress} value={this.state.value} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={ this.setWord } color="primary">Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default InputWordPopup;
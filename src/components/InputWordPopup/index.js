import React, { Component } from 'react'
import { Button, Input, InputGroup, InputGroupAddon, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './InputWordPopup.css';

class InputWordPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            owner: ''
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onOwnerChange = this.onOwnerChange.bind(this);
        this.setWord = this.setWord.bind(this);
        this.share = this.share.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.setWord();
        } else {
            let newValue = e.target.value;
            let regex = /((?![A-z]).)*/g;
            this.setState({
                value: newValue.replace(regex, "")
            });
        }
    }

    onOwnerChange(e) {
        if (e.key === "Enter") {
            this.setWord();
        } else {
            let newValue = e.target.value;
            let regex = /((?![A-z0-9]).)*/g;
            this.setState({
                owner: newValue.replace(regex, "")
            });
        }
    }

    setWord() {
        this.props.setWord(this.state.value);
        if (this.state.owner !== '') {
            this.props.setOwner(this.state.owner);
        }
    }

    share() {
        this.props.share(this.state.value, this.state.owner);
    }

    render() {
        let body;
        if (this.props.shareLink) {
            body = <>
                <ModalBody>
                    Send this link to your friends to share your game
                    <br />
                    <InputGroup>
                        <Input id="share-link" value={this.props.shareLink} readOnly />
                        <InputGroupAddon addonType="append"><Button onClick={ () => { document.getElementById("share-link").select(); document.execCommand("copy"); }} color="primary"><i className="fas fa-copy"></i> Copy</Button></InputGroupAddon>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button size="lg" onClick={ this.setWord } color="primary">Play Now</Button>
                </ModalFooter>
            </>;
        } else {
            body = <>
                <ModalBody>
                    <InputGroup>
                        <Label for="word">Enter the word that the other player has to guess. It has to be a single word, without spaces, numbers or symbols.</Label>
                        <Input placeholder="Secret Word" name="word" onKeyPress={this.handleKeyPress} onChange={this.handleKeyPress} value={this.state.value} />
                    </InputGroup>
                    <br />
                    <Label for="owner">(Optional) Enter your name:</Label>
                    <Input placeholder="(Optional) Your name" name="owner" onKeyPress={this.onOwnerChange} onChange={this.onOwnerChange} value={this.state.owner} />
                </ModalBody>
                <ModalFooter>
                    <Button size="lg" onClick={this.share} color="success">Share</Button>
                    <Button size="lg" onClick={this.setWord} color="primary">Play Now</Button>
                </ModalFooter>
            </>;
        }
        return (
            <div>
                <Modal isOpen={true} toggle={null}>
                    <ModalHeader toggle={null}>Enter your word</ModalHeader>
                    {body}
                </Modal>
            </div>
        )
    }
}

export default InputWordPopup;
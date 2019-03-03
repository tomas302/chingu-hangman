import React, { Component } from 'react';
import { InputGroup, Button } from 'reactstrap';
import './WrongLetters.css';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class WrongLetters extends Component {
  render() {
    let buttons = [...alphabet].map(el => {
      return <Button className="letter" color="primary" size="lg">{el}</Button>;
    });
    return (
      <div className="wrong-letters">
        <h3>Choose one</h3>
        <InputGroup>
          {buttons}
        </InputGroup>
      </div>
    )
  }
}

export default WrongLetters;

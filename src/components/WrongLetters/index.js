import React, { Component } from 'react';
import { InputGroup, Button } from 'reactstrap';
import './WrongLetters.css';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class WrongLetters extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e, index) {
    if (this.props.alphabet[index] !== 0) {
      e.preventDefault();
    } else {
      this.props.handleClick(index);
    }
  }

  render() {
    let buttons = [...alphabet].map((el, index) => {
      let color = (this.props.alphabet[index] === 0) ? "primary" : (this.props.alphabet[index] === 1) ? "success" : "danger" ;
      return <Button key={index} onClick={ (e) => this.handleClick(e, index) } className="letter" color={ color } size="lg">{el}</Button>;
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

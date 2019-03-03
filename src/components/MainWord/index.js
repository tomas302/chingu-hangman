import React, { Component } from 'react'

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class MainWord extends Component {
  /*
    Hi, I leave you here two props:
      - this.props.word (a string with the word to be guessed in uppercase)
      - this.props.alphabet (an array of 26 integers (one for each letter of the alphabet)
        that contains a -1 (WRONG), a 0 (INITIAL) or a 1 (CORRECT) depending on the current state of the letter)
    
    Also you can use the same index in 'this.props.alphabet' and the constant 'alphabet' above,
    to get the state of the letter and the actual letter respectively.
    
    IMPORTANT: remember to delete this comment when you're done and happy coding!
  */
  render() {
    return (
      <div>
        {this.props.word}
      </div>
    )
  }
}

export default MainWord;

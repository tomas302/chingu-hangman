import React, { Component } from 'react'
import "./MainWord.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class MainWord extends Component {
  render() {
    let word = [];
    for (let i = 0; i < this.props.word.length; i++) {
      let toRender;
      let letterIndex = alphabet.indexOf(this.props.word[i]);
      if (this.props.alphabet[letterIndex] === 0) {
        toRender = <React.Fragment key={i}>_</React.Fragment>;
      } else {
        toRender = <React.Fragment key={i}>{this.props.word[i]}</React.Fragment>;
      }
      word.push(toRender);
      if (i % 7 === 0 && i !== 0) word.push(<React.Fragment key={i * 10}><br /></React.Fragment>);
    }
    return (
      <div className="main-word">
        {word}
      </div>
    )
  }
}

export default MainWord;

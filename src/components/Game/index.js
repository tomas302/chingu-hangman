import React, { Component } from 'react';
import HangMan from '../HangMan/';
import "./Game.css";

class Game extends Component {

    render() {
        
        return <div>
            <HangMan />
        </div>;
    }
}

export default Game;
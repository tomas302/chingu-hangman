import {connect} from "react-redux";
import Game from '../components/Game/';

function mapStateToProps(state){
    return {
        playing: state.game.playing,
        gameEnded: state.game.gameEnded,
        isWinner: state.game.isWinner,
        owner: state.game.owner,
        alphabet: state.alphabet,
        word: state.word,
        corrects: state.corrects,
        failures: state.failures
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Game);
import {connect} from "react-redux";
import Game from '../components/Game/';

function mapStateToProps(state){
    return {
        playing: state.game.playing,
        owner: state.game.owner,
        failures: state.failures
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Game);
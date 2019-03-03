import {connect} from "react-redux";
import Game from '../components/Game/';

function mapStateToProps(state){
    return {
        playing: state.game.playing
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Game);
import {connect} from "react-redux";
import MainWord from '../components/MainWord/';

function mapStateToProps(store){
    return {
        word: store.word,
    }
}

export default connect(mapStateToProps) (MainWord);
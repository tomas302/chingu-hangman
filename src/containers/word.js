import {connect} from "react-redux";
import MainWord from '../components/MainWord/';

function mapStateToProps(store){
    return {
        word: store.word,
        alphabet: store.alphabet
    }
}

export default connect(mapStateToProps) (MainWord);
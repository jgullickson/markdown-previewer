import Editor from '../components/Editor';
import { connect } from 'react-redux';
import { updateText } from '../actions';

const mapStateToProps = state => {
    return {
        content: state.markdown
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: e => dispatch(updateText(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)

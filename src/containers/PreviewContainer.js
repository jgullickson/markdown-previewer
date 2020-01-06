import Preview from '../components/Preview';
import { connect } from 'react-redux';
import marked from 'marked';

const mapStateToProps = state => {
    return {
        content: state.markdown
    }
}

export default connect(mapStateToProps)(Preview)
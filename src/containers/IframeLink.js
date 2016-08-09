import { connect } from 'react-redux';
import IframeBox from '../components/IframeBox';

const mapStateToProps = (state) => {
	return {
		iframeHref: state.iframeHref,
	}
}

const IframeLink = connect(mapStateToProps)(IframeBox);

export default IframeLink;

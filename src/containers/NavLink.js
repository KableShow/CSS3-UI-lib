import { connect } from 'react-redux';
import { changeIframe } from '../actions';
import NavBox from '../components/nav/NavBox';

const mapStateToProps = (state, ownProps) => {
	return {
		iframeHref: state.iframeHref,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClickChange: (e) => {
			let href = e.target.getAttribute('href');
			dispatch(changeIframe(href));
			e.preventDefault();
		}
	}
}

const NavLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBox)

export default NavLink

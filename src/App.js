import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavLink from './containers/NavLink';
import IframeLink from './containers/IframeLink';

class AppComponent extends Component {
	constructor(prop){
		super(prop);
	}

	render(){
		let href = this.props.href?this.props.href:'test.html';
		href = 'test.html';
		return (
			<div>
				<NavLink linkArr={this.props.navData} />	
				<IframeLink />
			</div>
		);
	}
}

const App = connect()(AppComponent);
export default App;

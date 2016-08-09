import React from 'react';
import NavDetailUl from './NavDetailUl';

export default class NavEachLi extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isShow: false
		}
	}

	toggleShow(){
		this.setState({isShow: !this.state.isShow});	
	}

	render(){
		let isShow = this.state.isShow;
		let classStr = 'nav-headBtn ' + (isShow?'show-Child':'');
		return (
			<li key={this.props.ikey}>
				<a className={classStr} href="#" onClick={this.toggleShow.bind(this)}>{this.props.eachLink['head']}</a>
				<NavDetailUl linkArr={this.props.eachLink['child']} isShow={isShow} changeIframe={this.props.changeIframe}/>
				<hr />
			</li>
		);
	}
}

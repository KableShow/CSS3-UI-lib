import React from 'react';
import NavDetailLi from './NavDetailLi';

export default class NavDetailUl extends React.Component {
	constructor(props){
		super(props);
	}

	makeUl(arr){
		let html = arr.map(function(i,e){
			return (
				<NavDetailLi linkObj={i} key={e} ikey={e} />
			);
		});
		return html;
	}

	openIframe(e){
		let target = e.target;
		let href = e.getAttribute('href');

		e.preventDefault();
	}

	render(){
		let html = this.makeUl(this.props.linkArr);
		return (
			<ul className="nav-detail" style={{display: this.props.isShow?'block':'none'}} onClick={this.props.changeIframe.bind(this)}>
				{html}
			</ul>
		);
	}
}

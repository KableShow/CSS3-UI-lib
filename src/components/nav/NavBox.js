import React from 'react';
import NavEachLi from './NavEachLi';

export default class NavBox extends React.Component {
	constructor(props,context){
		super(props,context);
		this.store = props.store;
	}

	makeLi(arr){
		let changeIframe = this.props.onClickChange;
		let html = arr.map(function(i,e){
			return (
				<NavEachLi key={e} ikey={e} eachLink={i} changeIframe={changeIframe}/>
			);
		});
		return html;
	}

	render(){
		let linkArr = this.props.linkArr;
		let html = this.makeLi.call(this,linkArr);
		return (
			<ul className="nav-box">
				{html}
			</ul>
		);
	}
}

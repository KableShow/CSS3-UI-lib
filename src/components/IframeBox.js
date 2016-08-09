import React, { Component } from 'react';

export default class IframeBox extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let href = this.props.iframeHref['iframeHref'];
		href = href === ""?'welcome.html':href;
		return (
			<div id="iframeBox" className="leftIframe" >
				<iframe src= {href} frameBorder="0" style={{width:'100%',height:'100%'}}></iframe>
			</div>
		);
	}
}

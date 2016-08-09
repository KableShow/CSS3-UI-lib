import React from 'react';

export default class NavDetailLi extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let linkObj = this.props.linkObj;
		return (
			<li key={this.props.ikey}>
				<a href={linkObj['link']}>
					<span>{this.props.ikey}.</span>
					{linkObj['title']}
				</a>
			</li>
		);
	}
}

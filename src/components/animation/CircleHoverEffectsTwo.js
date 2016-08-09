import React from 'react';

class CircleHoverEffectsTwo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let cssName = this.props.cssName;
		let linkTo = this.props.linkTo;
		return (
			<div className={cssName}>
				<div className="coverDiv"></div>		
				<div className="contentDiv">
					<h3>Music poster</h3>
					<p>
						by Angela Duncan
						<a href={linkTo}>VIEW ON DRIBBBLE</a>
					</p>
				</div>
			</div>
		)
	}
}

export default CircleHoverEffectsTwo;

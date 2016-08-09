import React from 'react';

class CircleHoverEffects extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let cssName = this.props.cssName;
		let linkTo = this.props.linkTo;
		return (
			<div className={cssName}>
				<div>
					<h3>USE WHAT YOU HAVE</h3>
					<p>
						by Angela Duncan
						<a href={linkTo}>VIEW ON DRIBBBLE</a>
					</p>
				</div>
			</div>		
		)
	}
}

export default CircleHoverEffects;

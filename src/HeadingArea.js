import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class HeadingArea extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: ['hello','lkadk','world','gg']
		}
	}

	handleAdd(){
		let newItem = this.state.items.concat([prompt('some text')]);
		this.setState({items: newItem});
	}

	handleRemove(i){
		let newItem = this.state.items.slice();
		newItem.splice(i,1);
		this.setState({items:newItem});
	}

	render(){
		let items = this.state.items.map(function(item,i){
			return (
				<div key={item} onClick={this.handleRemove.bind(this,i)}>
					{item}
				</div>
			);
		}.bind(this));

		return (
			<div>
				<button onClick={this.handleAdd.bind(this)}>Add Item</button>
				<ReactCSSTransitionGroup transitionName="heading1" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500}> 
					<h1>Hello,world!</h1>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default HeadingArea;

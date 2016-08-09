import React,{ Component } from 'react';
import CSSLine from './CSSLine';

export default class CssCodeBox extends Component {
	constructor(prop){
		super(prop);
	}

	render(){
		let code = this.props.code;
		return (
			<div>
				<CSSLine code={code} /> 
			</div>
		);
	}
}

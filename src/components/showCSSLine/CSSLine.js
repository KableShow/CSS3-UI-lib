import React, { Component } from 'react';

export default class CSSLine extends Component {
	constructor(prop){
		super(prop);
	}

	formatCSS(code){
		let newCode = code;
		//去除空格,可能去除了& h1{中间的空格
		//newCode = code.replace(/\s/g,"");
		//添加多去除的空格
		//newCode = newCode.replace(/&\w{1}/g,function(word){
		//	return "& " + word.slice(-1);
		//});
		//操作符栈,换行的unicode编码\u000A,空格的unicode编码\u0020
		let operateStack = ['\u000A'];
		let codeArr = newCode.split("");
		let newCodeArr = [], spanArr = [];
		let li,key=1;
		codeArr.forEach(function(e,i){
			switch(e){
				case '{':
					operateStack.push('\u0020','\u0020');
					spanArr.push('{',...operateStack);
					newCodeArr.push(spanArr.join(""));
					spanArr = [];
					break;
				case ';':
					spanArr.push(';');
					li = spanArr.join("");
					newCodeArr.push(<span key={key} style={{color:'#39f'}}>{li}</span>);
					newCodeArr.push(operateStack.join(""));
					spanArr = [],key++;
					break;
				case '}':
					operateStack.splice(-2,2);
					li = operateStack.join("") + '}';	
					newCodeArr.splice(-1,1,li,operateStack.join(""));
					break;
				default:
					spanArr.push(e);
			}
		})
		return newCodeArr;
	}

	render(){
		let codeStr = this.props.code;
		let formatCodeArr = this.formatCSS(codeStr);
		return (
			<div style={{textAlign:'left',}}>
				<pre style={{fontSize:'16px',letterSpacing:'1px',whiteSpace:'pre-wrap',wordBreak:'break-word',width:'auto',maxWidth:'500px',padding:'0 10px'}}>{formatCodeArr}</pre>
			</div>
		);
	}
}

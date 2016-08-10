import React, { Component } from 'react';

export default class HeaderStyle extends Component {
    constructor(props){
        super(props);
    }

	componentDidMount(){
        //给首个demo添加current-demo样式
        this._nav.querySelector('a').setAttribute('class','current-demo');

        //绑定切换视图事件
		this._nav.addEventListener('click',(function(e){
			let dom = e.target;
			if(dom.nodeType !== 1 || dom.nodeName !== 'A'){
				e.preventDefault();
				return;
			}
			let nowDemo = this.props.currentDemo;
			let demo = parseInt(dom.getAttribute('data-demo'));
			if(demo !== nowDemo){
				let currentDemo = this._nav.querySelector('.current-demo');
				let cssStr = currentDemo.getAttribute('class');
				cssStr = cssStr.replace(/current-demo/,"");
				currentDemo.setAttribute('class',cssStr);
				cssStr = dom.getAttribute('class');
				dom.setAttribute('class',cssStr+' current-demo');

                this.props.changeDemo(demo);
			}
			e.preventDefault();
		}).bind(this));
	}

    render(){
        const NUM = parseInt(this.props.num);
        let aLinkArr = [];
        for(let i = 0,str=""; i < NUM; ++i){
            str = 'Demo ' + i;
            aLinkArr.push(<a href="#" key={i} data-demo={i}>{str}</a>);
        }

        return (
            <header>
                <h1><strong>{this.props.h1Text}</strong></h1>
                <h2>{this.props.h2Text}</h2>
                <nav ref={(c) => this._nav = c} >
                {aLinkArr}
                </nav>
            </header>
        );
    }
}

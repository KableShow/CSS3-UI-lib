import React,{Component} from 'react';
import CircleHoverEffects from './CircleHoverEffects';
import CircleHoverEffectsTwo from './CircleHoverEffectsTwo';
import CssCode from '../showCSSLine';

const linkURL = "http://css3lib.alloyteam.com/#animation/CircleHoverEffects";
const code1 =".circleHover1 {background:url('./image/1.jpg');border-radius:50%;width:220px;height:220px;box-shadow:inset 0 0 0 15px rgba(255,255,255,0.6);transition:all 0.4s ease-in-out;&:hover {box-shadow:inset 0 0 0 0 rgba(0,0,0,0);&>div {transform:scale(1);&>p {opacity:1;}}}&>div {display:block;border-radius:50%;background:rgba(63,147,147,0.8);width:100%;height:100%;text-align:center;transition:all 0.4s ease-in-out;overflow:hidden;transform:scale(0);&>h3 {text-transform:uppercase;margin:0 30px;padding-top:45px;font-size:22px;letter-spacing:2px;color:#fff;font-family:'Open Sans',Arial,sans-serif;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3);cursor:default;}&>p {margin:30px 30px 0 30px;padding:10px 5px;border-top:1px solid rgba(255,255,255,0.5);color:#fff;font-style:italic;font-size:12px;opacity:0;transition:all 1s ease-in-out 0.4s;&>a {display:block;color:rgba(255,255,255,0.7);font-style:normal;font-weight:700;text-transform:uppercase;font-size:9px;letter-spacing:1px;padding-top:4px;font-family:'Open Sans',Arial,sans-serif;&:hover {color:rgba(255,255,0,0.7);}}}}}";
const code2 = ".circleHover2 {border-radius:50%;box-shadow:inset 0 0 0 15px rgba(255,255,255,0.7),inset 0 0 0 0 rgba(200,95,66,0.4);background:url('./image/1.jpg');width:220px;height:220px;transition:all 0.4s ease-in-out;text-align:center;margin-bottom:20px;&>div {width:100%;height:100%;border-radius:50%;transform:scale(0);transition:all 0.4s ease-in-out;overflow:hidden;&>h3 {font-size:22px;font-family:'Open Sans',Arial,sans-serif;color:#fff;margin:0 30px;padding-top:45px;cursor:default;}&>p {border-top:1px solid rgba(255,255,255,0.5);padding:10px 5px;color:#fff;font-style:italic;font-size:12px;margin:30px 30px 0 30px;&>a {display:block;font-weight:700;text-transform:uppercase;font-size:9px;padding-top:4px;color:#fff;font-family:'Open Sans',Arial,sans-serif;}}}&:hover {box-shadow:inset 0 0 0 15px rgba(255,255,255,0.4),inset 0 0 0 110px rgba(200,95,66,0.5);&>div {transform:scale(1);}}}";
const code3 = ".circleHover3 {position:relative;width:220px;height:220px;text-align:center;margin-bottom:20px;&>div {width:100%;height:100%;position:relative;border-radius:50%;}& .coverDiv {box-shadow:inset 0 0 0 15px rgba(255,255,255,0.5);transition:all 0.4s ease-in-out;background:url('./image/2.jpg');transform:rotate(0deg);transform-origin:210px 80px;z-index:100;}& .contentDiv {z-index:10;background:#c9512e;box-shadow:inset 0 0 0 5px rgba(0,0,0,0.05);position:absolute;top:0px;overflow:hidden;&>h3 {color:#fff;text-transform:uppercase;letter-spacing:2px;margin:0 60px;padding-top:22px;box-sizing:border-box;height:85px;font-size:18px;cursor:default;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3);font-family:'Open Sans',Arial,sans-serif;}&>p {border-top:1px solid rgba(255,255,255,0.5);padding:10px 5px;margin:0 30px;color:#fff;font-size:12px;&>a{display:block;color:#fff;width:80px;height:80px;box-sizing:border-box;background:rgba(255,255,255,0.3);font-size:9px;padding-top:24px;opacity:0;transition:all 0.3s ease-in-out 0.2s;transform:translateX(50px) rotate(120deg);font-weight:700;border-radius:50%;margin:10px auto 0 auto;&:hover {background:rgba(255,255,255,0.5);}}}}&:after {content:' ';display:block;width:8px;height:8px;border-radius:50%;background:rgba(0,0,0,0.8);position:absolute;z-index:200;top:80px;right:8px;}&:hover {& .coverDiv {transform:rotate(-105deg);}& .contentDiv>p>a {opacity:1;transform:translateX(0px) rotate(0deg);}}}";
const code4 = ".circleHover4 {width:220px;height:220px;background:url('./image/5.jpg'),#fff;border-radius:50%;position:relative;transition:all 0.4s ease-in-out;perspective:800px;&>div{width:190px;height:190px;border-radius:50%;background:#000;position:absolute;top:15px;left:15px;color:#fff;overflow:hidden;z-index:-100;transform:rotate3d(0,1,0,180deg);transition:all 0.4s ease-in-out;&>h3 {text-transform:uppercase;margin:0 30px;padding-top:45px;font-size:14px;letter-spacing:2px;color:#fff;font-family:'Open Sans',Arial,sans-serif;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3);cursor:default;}&>p {margin:10px 30px 0 30px;padding:10px 5px;border-top:1px solid rgba(255,255,255,0.5);color:#fff;font-style:italic;font-size:12px;&>a{display:block;color:rgba(255,255,255,0.7);font-style:normal;font-weight:700;text-transform:uppercase;font-size:9px;letter-spacing:1px;padding-top:4px;font-family:'Open Sans',Arial,sans-serif;&:hover {color:yellow;}}}}&:before,&:after {content:' ';display:block;position:absolute;top:15px;left:15px;width:190px;height:190px;border-radius:50%;transition:all 0.4s ease-in-out;}&:before {background:url('./image/5.jpg');background-position:center center;backface-visibility:hidden;}&:after {background:#fff;z-index:-200;box-shadow:0 0 0 15px rgba(255,255,255,0.5);}&:hover{&:before{transform:rotate3d(0,1,0,-180deg);}&:after {box-shadow:0 0 0 0 rgba(0,0,0,0);}&>div {transform:rotate3d(0,1,0,0deg);}}}";
const code5 = ".circleHover5 {width:220px;height:220px;position:relative;background:url('./image/6.jpg');border-radius:50%;box-shadow:inset 0 0 0 20px rgba(255,255,255,0.5);&>div{width:100%;height:100%;background:#223e87;border-radius:50%;transform:scale(1.3);transition:all 0.6s ease-in-out 0.1s;opacity:0;position:relative;z-index:2;&>h3 {text-transform:uppercase;margin:0 30px;padding-top:45px;font-size:14px;letter-spacing:2px;color:#fff;font-family:'Open Sans',Arial,sans-serif;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3);cursor:default;}&>p {margin:10px 30px 0 30px;padding:10px 5px;border-top:1px solid rgba(255,255,255,0.5);color:#fff;font-style:italic;font-size:12px;&>a{display:block;color:rgba(255,255,255,0.7);font-style:normal;font-weight:700;text-transform:uppercase;font-size:9px;letter-spacing:1px;padding-top:4px;font-family:'Open Sans',Arial,sans-serif;&:hover {color:yellow;}}}}&:before,&:after {content:' ';display:block;width:180px;height:180px;position:absolute;top:20px;left:20px;border-radius:50%;}&:before {z-index:2;background:url('./image/6.jpg') center center;transition:all 0.4s ease-in-out;transform-origin:50%;}&:after {background:#fff;z-index:1;}&:hover {&:before{transform:scale(0);}&>div {transform:scale(0.818181);opacity:1;}}}";
const code6 = ".circleHover6 {width:220px;height:220px;position:relative;border-radius:50%;box-shadow:inset 0 0 0 20px rgba(255,255,255,0.3);background:url('./image/7.jpg');perspective:800px;&>div{width:180px;height:180px;position:absolute;top:20px;left:20px;background:transparent;border-radius:50%;z-index:2;transition:all 0.4s ease-in-out 0.1s;&>h3 {text-transform:uppercase;margin:0 30px;padding-top:45px;font-size:14px;letter-spacing:2px;color:#fff;font-family:'Open Sans',Arial,sans-serif;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3);cursor:default;}&>p {margin:10px 30px 0 30px;padding:10px 5px;border-top:1px solid rgba(255,255,255,0.5);color:#fff;font-style:italic;font-size:12px;&>a{display:block;color:rgba(255,255,255,0.7);font-style:normal;font-weight:700;text-transform:uppercase;font-size:9px;letter-spacing:1px;padding-top:4px;font-family:'Open Sans',Arial,sans-serif;&:hover {color:yellow;}}}}&:before,&:after {content:' ';display:block;width:180px;height:180px;position:absolute;top:20px;left:20px;border-radius:50%;z-index:3;}&:after {z-index:1;background:url('./image/bg.jpg');}&:before{background:url('./image/7.jpg') center center;transition:all 0.4s ease-in-out;transform-origin:0 100%;}&:hover {&:before {transform:rotateX(-180deg);}&>div {background:rgba(255,69,0,0.3);}}}";

export default class App extends Component{
	constructor(prop){
		super(prop);
		this.state = {
			currentDemo: 0
		}
	}

	componentDidMount(){
		this._nav.addEventListener('click',(function(e){
			let dom = e.target;
			if(dom.nodeType !== 1 || dom.nodeName !== 'A'){
				e.preventDefault();
				return;
			}
			let nowDemo = this.state.currentDemo;
			let demo = parseInt(dom.getAttribute('data-demo'));
			if(demo !== nowDemo){
				let currentDemo = this._nav.querySelector('.current-demo');
				let cssStr = currentDemo.getAttribute('class');
				cssStr = cssStr.replace(/current-demo/,"");
				currentDemo.setAttribute('class',cssStr);
				cssStr = dom.getAttribute('class');
				dom.setAttribute('class',cssStr+' current-demo');

				this.setState({currentDemo:demo});
			}
			e.preventDefault();
		}).bind(this));
	}

	render(){
		let left = (this.state.currentDemo * (-100)) + '%';
		let styleObj = {width:'600%'};
		styleObj.left = left;

		return (
			<div className="container">
				<header>
					<h1><strong>Circle</strong> Hover Effects</h1>
					<h2>Pretty hover effects on circle with CSS Transitions</h2>
					<nav ref={(c) => this._nav = c} >
						<a className="current-demo" href="#" data-demo="0">Demo1</a>
						<a href="#" data-demo="1">Demo2</a>
						<a href="#" data-demo="2">Demo3</a>
						<a href="#" data-demo="3">Demo4</a>
						<a href="#" data-demo="4">Demo5</a>
						<a href="#" data-demo="5">Demo6</a>
					</nav>
				</header>
				<div id="showBox" className="commonShowBox" style={{top:'120px'}}>
					<div className="showBoxList" style={styleObj}>
						<div className="showBoxEach" style={{width:'16.66666%'}}>
							<div className="centerBox" style={{width:'850px'}}>
								<div className="styleGroup">
									<CircleHoverEffects
										cssName="circleHover1"
										linkTo={linkURL}
									/>
									<CircleHoverEffects
										cssName="circleHover1 picture3"
										linkTo={linkURL}
									/>
								</div>
								<div className="cssCodeBox">
									<CssCode code={code1} />
								</div>
							</div>
						</div>
						<div className="showBoxEach" style={{width:'16.66666%'}}>
							<div className="centerBox" style={{width:'850px'}}>
								<div className="styleGroup">
									<CircleHoverEffects
										cssName="circleHover2"
										linkTo={linkURL}
									/>
									<CircleHoverEffects
										cssName="circleHover2 picture3"
										linkTo={linkURL}
									/>
								</div>
								<div className="cssCodeBox">
									<CssCode code={code2} />
								</div>
							</div>
						</div>
						<div className="showBoxEach" style={{width:'16.66666%'}}>
							<div className="centerBox" style={{width:'850px'}}>
								<div className="styleGroup">
									<CircleHoverEffectsTwo
										cssName="circleHover3"
										linkTo={linkURL}
									/>
								</div>
								<div className="cssCodeBox">
									<CssCode code={code3} />
								</div>
							</div>
						</div>
						<div className="showBoxEach" style={{width:'16.66666%'}}>
							<div className="centerBox" style={{width:'850px'}}>
								<div className="styleGroup">
									<CircleHoverEffects
										cssName="circleHover4"
										linkTo={linkURL}
									/>
								</div>
								<div className="cssCodeBox">
									<CssCode code={code4} />
								</div>
							</div>
                        </div>
						<div className="showBoxEach" style={{width:'16.66666%'}}>
							<div className="centerBox" style={{width:'850px'}}>
								<div className="styleGroup">
									<CircleHoverEffects
										cssName="circleHover5"
										linkTo={linkURL}
									/>
								</div>
								<div className="cssCodeBox">
									<CssCode code={code5} />
								</div>
                            </div>
                        </div>
						<div className="showBoxEach" style={{width:'16.66666%'}}>
							<div className="centerBox" style={{width:'850px'}}>
								<div className="styleGroup">
									<CircleHoverEffects
										cssName="circleHover6"
										linkTo={linkURL}
									/>
								</div>
								<div className="cssCodeBox">
									<CssCode code={code6} />
								</div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		);
	}
}

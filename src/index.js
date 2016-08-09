import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CSS3App from './reducers'; 
import App from './App';

require('./index.scss');

const linkURL = "http://css3lib.alloyteam.com/#animation/CircleHoverEffects";
const navData = [{
	head: '动画(ANIMATION)',
		child: [{
			title: 'Circle Hover Effects With CSS Transition',
			link: './src/components/animation/circleHoverEffects.html'
		},{
			title: 'Animated Buttons With CSS3',
			link: '#',
		},{
			title: 'Timed Notifications With CSS Animations',
			link: '#',
		},{
			title: 'Tips & Tricks: How To Create Animated Tooptips with CSS3',
			link: '#',
		},{
			title: 'CSS3实现动画loding',
			link: '#',
		},{
			title: 'CSS3动画属性汇总',
			link: '#',
		}]
},{
	head: '按钮(BUTTON)',
		child: [{
			title: 'Circle Hover Effects With CSS Transition',
			link: 'circleHoverEffects.html'
		}]
},{
	head: 'CSSGRADIENT',
		child: [{
			title: 'Circle Hover Effects With CSS Transition',
			link: 'circleHoverEffects.html'
		}]
},{
	head: '表单(FORM)',
		child: [{
			title: 'Circle Hover Effects With CSS Transition',
			link: 'circleHoverEffects.html'
		}]
},{
	head: '图像滤镜(IMAGE_EFFECTS)',
		child: [{
			title: 'Circle Hover Effects With CSS Transition',
			link: 'circleHoverEffects.html'
		}]
},{
	head: '动画(ANIMATION)',
					child: [{
								title: 'Circle Hover Effects With CSS Transition',
								link: 'circleHoverEffects.html'
							}]
				},{
					head: '动画(ANIMATION)',
					child: [{
								title: 'Circle Hover Effects With CSS Transition',
								link: 'circleHoverEffects.html'
							}]
				},{
					head: '动画(ANIMATION)',
					child: [{
								title: 'Circle Hover Effects With CSS Transition',
								link: 'circleHoverEffects.html'
							}]
				},{
					head: '动画(ANIMATION)',
					child: [{
								title: 'Circle Hover Effects With CSS Transition',
								link: 'circleHoverEffects.html'
							}]
				},{
					head: '动画(ANIMATION)',
					child: [{
								title: 'Circle Hover Effects With CSS Transition',
								link: 'circleHoverEffects.html'
							}]
				},{
					head: '动画(ANIMATION)',
					child: [{
								title: 'Circle Hover Effects With CSS Transition',
								link: 'circleHoverEffects.html'
							}]
				},{
					head: '动画(ANIMATION)',
					child: [{
								title: 'Circle Hover Effects With CSS Transition',
								link: 'circleHoverEffects.html'
							}]
				}];

let store = createStore(CSS3App);
let iframeHref= store.getState(iframeHref);
console.log(iframeHref['iframeHref']); 
let href = iframeHref['iframeHref'] === ''?'test.html':iframeHref['iframeHref'];

render((
	<Provider store={store}>
		<App navData={navData} href={href}/>
	</Provider>
),document.getElementById('app'));

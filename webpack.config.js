var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		vendor: ['react','redux','react-redux'],
		circleIndex: [ 
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'./src/components/animation/index.js',
		],
		index: [
			'./src/index'
		],
	},
	output: {
		path: path.resolve(__dirname,'build'),
		filename: '[name].js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot','babel-loader?presets[]=es2015,presets[]=react'],
			exclude: /node_modules/,
			include: path.join(__dirname,'src')
			},{
			test: /\.scss$/,
			loader: 'style!css!sass'
			},{
			test: /\.(jpg|png)$/,
			loader: "url?limit=8192"
			}]
	},
	resolve: {
		root: [
			path.resolve('./node_modules/'),
			path.resolve('./src')
		],
		extensions: ['','.js','.scss','.json'],
		alias: {
		}
	}
};


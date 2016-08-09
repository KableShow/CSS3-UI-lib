var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webpackDevServer(webpack(config),{
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(3000,'localhost',function(err,result){
	if(err) return console.log(err);
	console.log('server started in localhost://3000/');
});

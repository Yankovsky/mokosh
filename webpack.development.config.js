const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config'), {
	output: {
		pathinfo: true,
		filename: '[name].js',
		publicPath: ''
	},
	debug: true,
	devtool: 'eval',
	devServer: {
		contentBase: './src',
		hot: true,
		inline: true,
		historyApiFallback: true,
		port: '9000',
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style!css?-autoprefixer!postcss'
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.jade'
		})
	]
});

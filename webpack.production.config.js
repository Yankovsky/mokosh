const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config'), {
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/assets/',
		filename: 'index.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract('style', 'css?sourceMap&minimize&-autoprefixer!postcss')
		}]
	},
	plugins: [
		new ExtractTextPlugin('index.css', {
			allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
});

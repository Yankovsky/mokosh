const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [['es2015', {loose: true}]]
				}
			},
			{
				test: /\.js$/,
				loader: 'eslint',
				exclude: [/node_modules/]
			},
			{
				test: /\.js$/,
				loader: 'source-map'
			},
			{
				test: /\.jade$/,
				loaders: ['html', 'jade-html']
			}
		]
	},
	postcss: () => [
		require('precss'),
		require('postcss-cssnext')
	],
	htmlLoader: {
		root: path.resolve(__dirname, 'src')
	}
};

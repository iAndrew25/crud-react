const webpack = require('webpack'),
	path = require('path'),
	ReactRootPlugin = require('html-webpack-react-root-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'script.js'
	},
	devServer: {
		contentBase: path.join(__dirname, "build"),
		compress: true,
		port: 9000
	},
	watch: true,
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
				}
			}
		}],
	},
	plugins: [
		new webpack.ProvidePlugin({
			'React': 'react',
		}),
		new ReactRootPlugin,
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: true
		})
	],
}
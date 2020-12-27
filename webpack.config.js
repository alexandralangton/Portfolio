const path = require('path');

module.exports = {
	entry: './app/index.js',
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 8000,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.mp4$/i,
				use: {
					loader: 'file-loader',
				},
			},
		],
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
};

const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new CompressionPlugin({
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 8000,
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.mp4$/i,
				loader: 'file-loader',
				options: {
					name: 'media/[hash].[ext]',
				},
			},
		],
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		assetModuleFilename: 'media/[hash][ext]',
	},
};

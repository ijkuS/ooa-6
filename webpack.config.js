const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	mode: process.env.mode,
	entry: './src/index.js',
	output: {
		filename: '[name].[fullhash].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	resolve: {
		// path.resove 형태로 사용할 수도 있다.
		// 그러면 node의 기본 모듈 'path'를 불러와야 한다.
		extensions: ['.js', '.jsx', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: 'assets/[contenthash].[ext]',
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].css',
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
	],
	devServer: {
		host: 'localhost',
		port: 3000,
		hot: true,
		open: true,
		historyApiFallback: true,
	},
};

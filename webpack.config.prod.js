const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ title: 'Webpack Kickstart' }),

        // Uncomment to try on local.
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),

        new UglifyJSPlugin({ sourceMap: true }),

        // Allow to do sth like:
        // if (process.env.NODE_ENV !== 'production') {console.log('dev mode!');}
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // To use with express server.
        // publicPath: '/'
    },
};
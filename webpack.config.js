const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: {
        index:{
            import: './src/index.js'
        }
    },
    mode: "development",
    devtool: "inline-source-map",
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Resturant Page',
            template: './src/index.html',
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png|jpg|jpeg$/,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
            },
            {
                test: /\.woff|wof$/,
                type: 'asset/resource',
            }
        ]
    }
}
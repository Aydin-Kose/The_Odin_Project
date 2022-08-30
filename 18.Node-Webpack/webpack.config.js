const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        open: {
            app: {
                name: 'google-chrome',
            }
        }
    },
    plugins: [
        new HtmlWebPackPlugin({ title: 'Output Management' })
    ],
    output: {
        // filename: 'main.js',
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource'
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ]
    },
    mode: 'development'
};
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'babel-loader' },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.vue$/, use: "vue-loader" }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: path.resolve('favicon.ico')
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        static: './dist'
    }
}

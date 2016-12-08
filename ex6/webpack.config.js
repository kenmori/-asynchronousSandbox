
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const uglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const path = require("path");

console.log(path.resolve(__dirname));//Users/b07267/Desktop/asynchronousSandbox/ex6
const dir = path.join(__dirname, "js");

module.exports = {
    context: __dirname + "/src/js",
    entry: {
        page1: "./page1.js",
        page2: "./page2.js",
        page3: "./page3.js",
        ap1: "./admin1.js",
        ap2: "./admin2.js"
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                // query: { presets:['react', 'es2015', 'stage-3']} //.babelrcへ
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=1024"
            },
            //上と同じ
            // {
            //     test: /\.png$/,
            //     loader: "url-loader",
            //     query: {limit: 1024}//1023バイト以下の画像のURLのみを使うようにする
            // },
            {
                test: /\.$/,
                loaders: 'style!css!scss'//["style-loader", "css-loader", "sass-loader"]の略
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']//import fafa from 'hoge'の拡張子なしに対応
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./some-folder")]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new commonsChunkPlugin('admin-commons.js', ['ap1', 'ap2']),
        new commonsChunkPlugin('commons.js', ['page1', 'page2', 'admin-commons.js']),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devServer: {
        inline: true,
        hot: true
    },
}
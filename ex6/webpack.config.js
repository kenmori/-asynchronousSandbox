
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const path = require("path");


module.exports = {
    context: __dirname + "/src",
    entry: {
        page1: "./js/page1.js",
        page2: "./js/page2.js",
        page3: "./js/page3.js",
        ap1: "./js/admin1.js",
        ap2: "./js/admin2.js",
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
                loader: ["babel-loader"],
                query: { presets:['react', 'es2015', 'stage-3']}
            },
            {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
        ],
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./some-folder")]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new commonsChunkPlugin('admin-commons.js', ['ap1', 'ap2']),
        new commonsChunkPlugin('commons.js', ['page1', 'page2', 'admin-commons.js'])
    ]
}
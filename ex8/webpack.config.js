const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const path = require("path");


module.exports = {
    context: __dirname + "/src",
    debug: true,
    devtool: '#eval-source-map',
    entry: ["webpack/hot/dev-server","webpack-hot-middleware/client","./index.js" ],
    output: {
        path: __dirname + "/dist",
        publicPath: '/',
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }

        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./some-folder")]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
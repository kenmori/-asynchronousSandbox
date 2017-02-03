module.exports = {
    context: __dirname + "/src",
    entry: {
        javascript: "./index.js",
        html: "./index.html",
        css: "./index.css",
    },

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: 'dist',
        host: '0.0.0.0',
        port: 80
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ["babel-loader"],
                query: {
                    presets:['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.css$/,
                loader: "file?name=[name].[ext]",
            },
        ],
    },
}
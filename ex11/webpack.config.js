module.exports = {
    context: __dirname + "/src",
    entry: {
        javascript: "./index.js",
        html: "./index.html",
    },

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ["babel-loader"],
                query: {
                    presets:['react', ['es2015', {loose: true}], 'stage-3']
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
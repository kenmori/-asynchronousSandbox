module.exports = {
    context: __dirname + "/src",
    entry: {
        index: "./index.js",
        html: "./index.html",
        css: "./index.css",
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=index.[ext]"
            },
            {
                test: /\.css$/,
                loader: "file-loader?name=index.[ext]"
            },
        ],
    },
}
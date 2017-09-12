var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./webpack.config');
var bundler = webpack(webpackConfig);

browserSync({
    server: {
        baseDir: 'dist',
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: webpackConfig.output.publicPath,
                stats: {colors: true }
            }),
            webpackHotMiddleware(bundler)
        ]
    },
    files: [
        'dist/css/*.css',
        'dist/*.html'
    ]
});
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]';
const webPack = require('webpack');
const htmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    entry: ['./src/index.jsx'],
    output: {
        filename: 'app.js',
        path: './build',
        publicPath: '/'
    },

    module: {
        loaders: [
            { test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loader: `style-loader!css-loader?${cssModules}`}
        ]
    },

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },

    plugins: [
        new htmlWebPackPlugin({ template: './src/assets/index.html' }),
        new ExtractTextPlugin('style.css', { allChunks: true })
    ]
}
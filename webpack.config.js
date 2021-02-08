const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        index: 'index.html',
        open: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [new ESLintPlugin({
        files: "src/**/*.js",
        emitError: true,
        extensions: ['ts', 'tsx'],
        emitWarning: true,
    })],
    resolve: {
        extensions: ['.js'],
    }
};
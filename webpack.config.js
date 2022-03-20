const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    watch: true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './example.js',
    mode: 'development',
    output: {
        path: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.mustache$/,
            use: {
                loader: path.resolve(__dirname, '../index'),
                options: { }
            }
        }]
    }
}

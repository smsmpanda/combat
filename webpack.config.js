const path = require('path');
module.exports = {
    entry: './ts/app.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './build')
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts']
    },
}

var path = require('path');


module.exports = {
    entry: "./app/assets/scripts/App.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
            }
        ]
    }
}

// module: {
//     loaders: [
//         {
//         loader: 'babel-loader',
//         query: {
//             presets: ['es2015']
//         },
//         test: /\.js$/,
//         exclude: /node_modules/
//         }
//     ]
// }
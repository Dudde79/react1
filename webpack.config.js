const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
      "main": [
        "./src/index.js"
      ],
    }   ,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },            
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              use: 'url-loader'
            },
        ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: "/dist/",
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
    resolve: { 
      extensions: [".js", ".jsx"] 
    },

};


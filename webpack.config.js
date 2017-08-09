var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'client/index.js'),
  output: {
    filename: 'bundle.js',  // we are creating this file after bundling
    path: path.join(__dirname, 'client/public'), // this will be the folder for bundle.js
    publicPath: '/client/static/' // we are gonna serve the bundle from here using webpack-dev-server
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'env'
          ],
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      },
       {test: /\.json$/, loader: 'json-loader'},
       
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }

    ]
  }
}
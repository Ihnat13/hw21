const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/HW15.js',
    
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            { test: /\.(js)$/, use: 'babel-loader' }
        ],
        
      },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      output: {
        path: path.resolve(__dirname,'client'),
        filename: 'bundle.js'
    },
      plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
      })],
      mode: 'production'
}
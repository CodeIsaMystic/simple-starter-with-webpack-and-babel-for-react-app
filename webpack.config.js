const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  module: {
    rules: [
      {
        /* REGEX: what we want to match with
            look up any files that end with .js or .jsx
            $ end the actul test
        */
        test: /\.(js|jsx)$/,
        /* Exclude node_modules */
        exclude: /node_modules/,
        /* Tell to webpack what loaders it needed to run
            and then converts in version we want 
          => babel
         */
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        /* The order DOES MATTER 
          => loaders are rade right to left 
          => we want the css-loader first
        */
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
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
      }
    ]
  }
}
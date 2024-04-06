const webpack = require('webpack')

module.exports = {
  publicPath: '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    ],
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer"),
        "stream": require.resolve("stream-browserify")
      } 
    }
  }
}

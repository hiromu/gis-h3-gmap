const webpack = require('webpack')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gis-h3-gmap'
    : '/',
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

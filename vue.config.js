module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gis-h3-gmap'
    : '/',
  configureWebpack: {
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify")
      } 
    }
  }
}

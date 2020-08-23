module.exports = {
  css: {
    extract: false
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8989,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  // para documentacao nos pages funcionar
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map'
  }
}

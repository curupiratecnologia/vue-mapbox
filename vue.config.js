module.exports = {

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
    devtool: 'source-map'
  }
}

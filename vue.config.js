module.exports = {
  devServer: {
    overlay: false,
    proxy: {
      '/': { 
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    }
  }
}
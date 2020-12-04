module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/vftoken': {
        target: 'https://contenidos.valorfuturo.com',
        secure: false,
      },
      '/vfrest': {
        target: 'https://contenidos.valorfuturo.com',
        secure: false,
      },
    },
  },
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://dev.agristroom.com/api/api',
      changeOrigin: true,
      pathRewrite: {
        '/api': '/',
      },
    })
  );
};
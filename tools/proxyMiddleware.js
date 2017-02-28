/* eslint-disable no-unused */
var proxy = require('http-proxy-middleware');

var proxyMiddleware = proxy("/api",
{
  target: 'http://localhost:9090'
});

function nextMiddleware(req, res, next){
  next();
}

function corsProxy(use){
  if(use){
    return corsProxyMiddleware;
  }
  return nextMiddleware;
}

function corsProxyMiddleware(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  return proxyMiddleware(req, res, next);
}

module.exports = corsProxy(false);

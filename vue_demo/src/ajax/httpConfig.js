/**
 * axios请求时不同环境下不同服务器的配置
 * serverOne服务器地址1
 */
const baseUrl = function (serverName) {
  let _url = '',
    serverOne = '';
  switch (process.env.NODE_ENV) {
    case 'development':
      serverOne = '';
      break;
    case 'test':
      serverOne = '';
      break;
    case 'production':
      serverOne = '';
      break;
    default:
      break;
  }
  switch (serverName) {
    case 'serverOne':
      _url = serverOne ;
      break;
    default:
      break;
  }
  return _url;
}
export default baseUrl;
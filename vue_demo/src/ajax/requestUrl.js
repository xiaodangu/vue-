/**
 * api模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import baseUrl from './httpConfig'; // http请求服务器的配置

const requestUrl = {  
  //示例
  demo (params) {
    return axios.post(`${baseUrl('serverOne')}/demo`, params);
  }
}
export default requestUrl;
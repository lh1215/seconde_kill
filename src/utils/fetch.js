import axios from 'axios'
import qs from 'qs'

// axios 相关配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '';

// 请求前做处理 => 传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post' || config.method === 'get') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  alert("参数错误");
  return Promise.reject(error);
});

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.retCode !== '0') {
    return Promise.reject(res);
  }
  return res.json();
}, (error) => {
  if () {
  
  }
});

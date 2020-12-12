import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axios: AxiosInstance = Axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASEURL
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, (err) => {
  return Promise.reject(err);
})

axios.interceptors.response.use((res: AxiosResponse) => {
  if(res.status === 200){
    return res.data;
  }
  else{ //TODO 根据状态码进行异常处理

  }
}, (err) => {
  return Promise.reject(err);
})

export default axios;
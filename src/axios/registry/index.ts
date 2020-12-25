import { AxiosResponse } from 'axios';
import { setToken, setUser } from '@/compositions/user';
import axios from '../index';

interface RegistryData{
  email: string;
  username: string;
  password: string;
}

export const registe = (data: RegistryData) => {
  return axios.post('api/wyg/blog/registry', data).then((res: AxiosResponse<any>) => { //封装token逻辑与用户信息
    setToken(res.data.token);
    setUser(res.data.user);
    return Promise.resolve();
  });
}
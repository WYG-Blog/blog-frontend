type Token = string | null;
interface UserInfo{
  name:string;
  email:string;
  avator:string;
}
interface User{
  info: UserInfo | null;
  token: Token | null;
}

const user:User = {
  token: localStorage.getItem('wyg-token') || null,
  info: JSON.parse(localStorage.getItem('wyg-user')!) || null
};

/**
 * 设置token
 * @param token 鉴权token
 */
export const setToken = (token:string) => {
  if(typeof token === 'string'){
    user.token = token;
    localStorage.setItem('wyg-token', token);
  }
}

/**
 * 设置基础用户信息
 * @param info 用户信息
 */
export const setUser = (info:UserInfo) => {
  if(typeof user === 'object'){
    user.info = info;
    localStorage.setItem('wyg-user', JSON.stringify(info));
  }
}

/**
 * 获取token
 */
export const getToken = ():Token => {
  return user.token;
}

/**
 * 获取基础用户信息
 */
export const getInfo = () => {
  return user.info;
}
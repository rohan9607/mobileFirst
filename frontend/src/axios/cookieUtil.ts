import Cookies from 'js-cookie';

export const setCookie = (key: string, value: any, options?: any) => {
  Cookies.set(key, value, options);
};

export const getCookie=(key:string)=>{
  return Cookies.get(key)
}
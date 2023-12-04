import axios, { AxiosInstance } from "axios";
import { getCookie } from "./cookieUtil";

const API_BASE_URL = process.env.API_URL as string;


export const privateApi: AxiosInstance = axios.create({
  //withCredentials: true,
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json',
    //"Content-Type": "multipart/form-data",
  },
});

privateApi.interceptors.request.use(
  async (config) => {
    const auth = getCookie("token");
    config.headers["Authorization"] = `Bearer ${auth}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
import axios from "axios";

export const { REACT_APP_BASE_URL } = process.env;

console.log(REACT_APP_BASE_URL);

const customAxios = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

customAxios.interceptors.request.use(
  (config) => {
    
    
    const token = localStorage.getItem('accessToken');
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default customAxios;
import axios from "axios";

export const { REACT_APP_BASE_URL } = process.env;

console.log(REACT_APP_BASE_URL);

const customAxios = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

export default customAxios;
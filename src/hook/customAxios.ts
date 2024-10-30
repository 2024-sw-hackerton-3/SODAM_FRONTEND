import axios from "axios";

export const { REACT_APP_BASE_URL } = process.env;

console.log(REACT_APP_BASE_URL);

const customAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

export default customAxios;
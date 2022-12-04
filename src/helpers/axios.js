import axios from "axios";

const API = "https://picsum.photos";

const instance = axios.create({
  baseURL: API
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;

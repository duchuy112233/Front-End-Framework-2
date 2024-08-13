import axios from "axios";

export const configAxios = () => {
  axios.defaults.baseURL = "http://localhost:3000";
  const token = localStorage.getItem("token");
  axios.interceptors.request.use((config) => {
    if (config) {
      config.headers.Authorization = `Bear ${token}`;
    }
    return config;
  });
};
  
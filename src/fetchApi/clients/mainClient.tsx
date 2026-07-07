import axios from "axios";

const mainClient = axios.create({
  baseURL: "https://backenddepi-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach JWT token
mainClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default mainClient;

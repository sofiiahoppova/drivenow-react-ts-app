import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://drivenow-node-backend.onrender.com",
  withCredentials: true,
});

const refreshApi = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://drivenow-node-backend.onrender.com",
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    const originalRequest = error.config;

    if (status !== 401) {
      return Promise.reject(error);
    }

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    if (originalRequest.url.includes("/refresh")) {
      return Promise.reject(error);
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      isRefreshing = true;
      const response = await refreshApi.post("/refresh");

      const newAccessToken = response.data.accessToken;

      localStorage.setItem("accessToken", newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem("accessToken");
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

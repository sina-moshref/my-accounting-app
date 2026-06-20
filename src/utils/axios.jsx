/**
 * axios setup to use mock service
 */
import axios from "axios";
import { AXIOS_BASE_URL } from "src/config";
import { globalLogout } from "src/contexts/jwt-context";

const axiosServices = axios.create();

if (process.env.NODE_ENV === "development") {
  axiosServices.defaults.baseURL = AXIOS_BASE_URL;
}

// Request interceptor
axiosServices.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject({ message: error.message }),
);

let isRefreshing = false;

axiosServices.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest?.url.includes("/auth/login")) {
      return Promise.reject((error.response && error.response.data) || "خطا");
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) return Promise.reject(error);
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axiosServices.post("/api/auth/refresh-token", {
          refreshToken: localStorage.getItem("refreshToken"),
        });

        const newAccessToken = response.data.accessToken;
        const newRefreshToken = response.data.refreshToken;

        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        axiosServices.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        isRefreshing = false;

        return axiosServices(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        delete axiosServices.defaults.headers.common.Authorization;

        isRefreshing = false;

        if (typeof globalLogout === "function") {
          globalLogout();
        }

        return Promise.reject({ message: refreshError.response.message });
      }
    }

    return Promise.reject(error || "خطا");
  },
);

export default axiosServices;

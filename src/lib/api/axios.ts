import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function getUserToken(): string | null {
  return localStorage.getItem("accessToken");
}

api.interceptors.request.use(
  function (config) {
    if (getUserToken() === null) return config;

    config.headers.Authorization = `Bearer ${getUserToken()}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;

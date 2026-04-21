import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

const api = axios.create({
  baseURL,
  timeout: 10000,
});

const getAuthHeader = () => {
  const basicToken = sessionStorage.getItem("basicAuth");
  if (!basicToken) {
    return {};
  }
  return { Authorization: `Basic ${basicToken}` };
};

export const verifyUserProfile = () => api.get("/user/profile", { headers: getAuthHeader() });

export const fetchUserProfile = () => api.get("/user/profile", { headers: getAuthHeader() });

export const fetchAdminDashboard = () => api.get("/admin/dashboard", { headers: getAuthHeader() });

export default api;

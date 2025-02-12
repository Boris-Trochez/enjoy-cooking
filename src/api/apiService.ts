import axios from "axios";

// Centralize API configuration and include interceptors

const api = axios.create({
  timeout: 10000, // ⏳ Prevent infinite loading
  headers: { "Content-Type": "application/json" },
});

/**
 * 🔹 REQUEST INTERCEPTOR
 * - Automatically attach auth tokens to every request
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 🔹 RESPONSE INTERCEPTOR
 * - Handle API errors globally
 * - Logout user on 401 Unauthorized
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        console.warn("Unauthorized! Logging out...");
        localStorage.removeItem("token"); // Clear token
        window.location.href = "/login"; // Redirect to login
      }

      return Promise.reject(data?.message || "API Error");
    }

    return Promise.reject("Network error. Please try again.");
  },
);

export default api;

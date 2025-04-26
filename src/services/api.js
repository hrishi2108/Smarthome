
// api.js
import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: "https://assing-cd7ba-default-rtdb.firebaseio.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Default export
export default api;

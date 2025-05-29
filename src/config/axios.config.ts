import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blessed-badge-e2ca161c14.strapiapp.com//api",
  timeout: 20000,
});

export default axiosInstance;

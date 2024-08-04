import axios from "axios";

const API = axios.create({
  // baseURL: "https://snapmeal-api.onrender.com/",
  baseURL: "https://snapmeal-server.vercel.app/",
  timeout: 10000,
});

export default API;

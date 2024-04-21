import axios from "axios";

const API = axios.create({
  baseURL: "https://snapmeal-api.onrender.com/",
  timeout: 10000,
});

export default API;

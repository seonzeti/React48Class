import axios from "axios";

const api = axios.create({
  baseURL: "https://openapi.naver.com/v1",
  headers: { "Content-type": "application/json" },
});

export default api;

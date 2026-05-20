import axios from "axios";

const publicApi = axios.create({
  baseURL: "http://localhost:3100/",
  headers: {
    "Content-Type": "application/json",
    allowedHeaders: "*",
    accessControlAllowOrigin: "*",
  },
});

export default publicApi;
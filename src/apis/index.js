import axios from "axios";

const api = axios.create({
  baseURL: "http://7ce6-78-135-60-164.ngrok.io/",
});

export default api;

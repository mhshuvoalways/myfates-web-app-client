import axios from "axios";

const instance = axios.create({
  baseURL: process.env.CLIENT_PANEL_BACKEND_URL,
});

export default instance;

import axios from "axios";
import { useAuthStore } from "@/store/auth";

const syncroom = axios.create({
  baseURL: "https://webapi.syncroom.appservice.yamaha.com/comm",
});

syncroom.interceptors.request.use(config => {
  const { token } = useAuthStore.getState();
  config.headers["Authorization"] = token;
  return config;
});

export { syncroom };

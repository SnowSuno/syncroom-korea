import axios from "axios";

export const auth = axios.create({
  baseURL: "https://auth.syncroom.link/api",
});

import axios from "axios";

export const yamahaClient = axios.create({
  baseURL: "https://webapi.syncroom.appservice.yamaha.com",
  timeout: 5000,
});

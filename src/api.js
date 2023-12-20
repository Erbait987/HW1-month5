import axios from "axios";

export const DummyjsonApi = axios.create({
  baseURL: "https://dummyjson.com",
});

import axios from "../helpers/axios";

export function getPhotos(page = 1, limit = 10) {
  return axios.get("/v2/list", { params: { page, limit } });
}

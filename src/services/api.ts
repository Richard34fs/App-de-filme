import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
        api_key: "1b4d41ee3e3cafcfe58efd01d173f330",
        language: "pt-BR",
    include_adult: false,
  },
});

export default api;
import axios from "axios";

const api = axios.create({
    baseURL: "https://api-front-end-challenge.buildstaging.com/api",
});

export default api;

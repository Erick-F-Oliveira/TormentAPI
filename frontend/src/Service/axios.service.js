import axios from "axios";


const baseURL = /*"http://localhost:5000" ||*/import.meta.env.VITE_SITE;
const api = axios.create({
    baseURL: baseURL,
})
export default api
//console.log(baseURL, "baseURL");
//comentario
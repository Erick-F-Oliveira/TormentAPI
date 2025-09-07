// src/Service/axios.service.js
import axios from "axios";

const baseURL = import.meta.env.VITE_SITE ? import.meta.env.VITE_SITE : "http://localhost:5000/api";

const api = axios.create({
    baseURL: baseURL,
    // Adicione esta linha para enviar cookies com as requisições
    withCredentials: true
});

export default api;
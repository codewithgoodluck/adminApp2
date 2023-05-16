import axios from "axios";
import { authService } from "../services/authService";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,    
});

export default axiosInstance;

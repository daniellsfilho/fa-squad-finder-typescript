import axios from "axios";


export const api = axios.create({
    baseURL: 'https://squad-finder-api.onrender.com'
})
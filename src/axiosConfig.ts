import axios from 'axios';
import { TOKEN_KEY } from './constants/localStorage';

const instance = axios.create({
    baseURL: 'http://localhost:4444',
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem(TOKEN_KEY);
    return config;
});

export default instance;

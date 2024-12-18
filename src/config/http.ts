import axios from 'axios';
import { API_URL } from '@/config/env';

const Http = axios.create({
   baseURL: API_URL,
   timeout: 60000,
   withCredentials: true
});

export { Http }
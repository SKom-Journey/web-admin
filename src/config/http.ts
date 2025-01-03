import axios from 'axios';
import { API_URL } from '@/config/env';
import toast from 'react-hot-toast';
import refreshSessionToken from '@/utils/refresh_session';
import clearSession from '@/utils/clear_session';

const Http = axios.create({
   baseURL: API_URL,
   timeout: 60000,
   withCredentials: true
});

Http.interceptors.response.use(
   async (response) => {
       if(response.data.status == 'TOKEN_EXPIRED') {
           const data = await refreshSessionToken();
           if(data.access_token) {
               return Http(response.config);
           } else {
               toast.error('Session Invalid!');
               clearSession();
               location.href = '/auth/login';
           }
       } else if(response.data.status == 'INVALID_TOKEN') {
           toast.error('Session Invalid!');
           clearSession();
           location.href = '/auth/login';
       }
       return response;
   },
   (error) => {
       return Promise.reject(error);
   }
);

export { Http }
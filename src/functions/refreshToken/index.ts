// axiosApiInstance.interceptors.response.use((response) => {
//     return response
//   }, async function (error) {
//     const originalRequest = error.config;
//     console.log(originalRequest)
//     if (error.response.status === 401 && !originalRequest._retry) {
//       console.log('토큰 만료')
//       originalRequest._retry = true;
//       const userAccessToekn = localStorage.getItem('access_toke');
//       const access_token = await onSilentRefresh(userAccessToekn); // 새로운 access_token
//       if(userAccessToekn){
//         originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
//         localStorage.setItem('access_token', JSON.stringify(access_token));
//       }
//       return axios(originalRequest);
//     }
//     return Promise.reject(error);
// });
// const onSilentRefresh = (accessToken:string|null) => {
//     axios.put(API_HOST + '/auth/reissue',{
//       header:{'x-refresh-token' : `${accessToken}`}
//     }).then((res)=>{
//         return res.data.access_token;
//     })
// }

import axios, { AxiosResponse } from 'axios';
import { API_HOST } from '../../constant/api';
import { JWT_EXPIRE_TIME } from '../../constant/jwt_expiri_time';

export const onSilentRefresh = () => {
    const refresh = localStorage.getItem('refresh_token')
    const data = null
    axios.put(API_HOST + '/auth/reissue', data, {
        headers: { 'x-refresh-token': `${refresh}` }
    })
        .then(onLoginSuccess)
}

export const onLoginSuccess = (res: AxiosResponse<any, any>) => {
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
}

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
    setTimeout(onSilentRefresh, JWT_EXPIRE_TIME - 60000);
}
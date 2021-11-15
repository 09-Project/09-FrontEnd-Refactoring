import axios from 'axios';
import React, { useEffect } from 'react';
import { API_HOST } from '../../constant/api';
import * as S from './styles';
import UserActive from './UserActive';
import UserInfo from './UserInfo';
import {setMyInfo} from '../../modules/redux/action/myinfo';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Profile(){
    const dispatch = useDispatch()
    const query = useQuery();
    const type = query.get("type");
    useEffect(()=>{
        axios.get(API_HOST+'/member/my-page',{
            headers : {Authorization : `Bearer ${localStorage.getItem("access_token")}`}
        }).then((res)=>{
            dispatch(setMyInfo(res.data))
        })
    },[]);
    return(
        <S.ProfileWrapper>
            <S.Title>마이페이지</S.Title>
            <UserInfo/>
            <UserActive/>
        </S.ProfileWrapper>
    )
}
export default Profile;
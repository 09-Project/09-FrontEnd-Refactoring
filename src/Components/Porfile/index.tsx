import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_HOST } from '../../constant/api';
import * as S from './styles';
import UserActive from './UserActive';
import UserInfo from './UserInfo';
import { useLocation } from 'react-router';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
interface userInfoType {
    member_id?: number;
    name?: string
    profile_url?: string
    introduction?: string
    all_posts_count?: number
    get_likes_count?: number
    in_progress_posts_count?: number
    completed_posts_count?: number
    like_posts_count?: number
}
function Profile() {
    const query = useQuery();
    const type = query.get("type");
    const [userInfo, setUserInfo] = useState<userInfoType>({
        // member_id: 0,
        // name: '',
        // profile_url: '',
        // introduction: '',
        // all_posts_count: 0,
        // get_likes_count: 0,
        // in_progress_posts_count: 0,
        // completed_posts_count: 0,
        // like_posts_count: 0
    })
    useEffect(() => {
        axios.get(API_HOST + '/member/my-page', {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        })
            .then((res) => {
                setUserInfo(res.data)
                console.log(res)
            })
    }, [])
    return (
        <S.ProfileWrapper>
            <S.Title>마이페이지</S.Title>
            <UserInfo userInfo={userInfo} />
            <UserActive userInfo={userInfo} />
        </S.ProfileWrapper>
    )
}
export default Profile;
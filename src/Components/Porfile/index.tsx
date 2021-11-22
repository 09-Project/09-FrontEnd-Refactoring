import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_HOST } from '../../constant/api';
import * as S from './styles';
import UserActive from './UserActive';
import UserInfo from './UserInfo';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/redux';
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
    const page = query.get('page')
    const id = query.get('id');
    const [userInfo, setUserInfo] = useState<userInfoType>({})
    const memberName = useSelector((state: RootState) => state.setMember.info.name)
    const [isMyPage, setIsMyPage] = useState(memberName === userInfo.name || page === 'my_page');
    useEffect(() => {
        if (isMyPage) {
            axios.get(API_HOST + '/member/my-page', {
                headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
            })
                .then((res) => {
                    setUserInfo(res.data)
                })
        } else {
            axios.get(`${API_HOST}/member/${id}`).then(res => {
                setUserInfo(res.data)
            })
        }
    }, [])
    useEffect(() => {
        if (userInfo.name === memberName) setIsMyPage(true)
        else setIsMyPage(false)
    }, [userInfo.name])
    return (
        <S.ProfileWrapper>
            <S.Title>마이페이지</S.Title>
            <UserInfo userInfo={userInfo} isMyPage={isMyPage} />
            <UserActive userInfo={userInfo} type={type} isMyPage={isMyPage} />
        </S.ProfileWrapper>
    )
}
export default Profile;
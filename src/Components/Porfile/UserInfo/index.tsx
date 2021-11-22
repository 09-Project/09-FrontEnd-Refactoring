import React, { useEffect } from 'react';
import * as S from './styles';
import { RootState } from '../../../modules/redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface PropsType {
    userInfo: any
    isMyPage: boolean
}

function UserInfo({ userInfo, isMyPage }: PropsType) {
    return (
        <S.UserInfoWrapper>
            <S.UserImg img={userInfo.profile_url} />
            <S.UserInfo>
                <S.UserName>{userInfo.name}</S.UserName>
                <S.UserActive>
                    <S.Actives>상품 {userInfo.all_posts_count}</S.Actives>
                    <S.Line />
                    <S.Actives>찜 {userInfo.get_likes_count}</S.Actives>
                </S.UserActive>
                <S.UserIntroduce>
                    {userInfo.introduction}
                </S.UserIntroduce>
                {isMyPage ?
                    <S.EditProfile>
                        <Link to="/changeProfile">
                            <p>프로필 수정</p>
                        </Link>
                    </S.EditProfile>
                    :
                    ''
                }
            </S.UserInfo>
        </S.UserInfoWrapper>
    )
}
export default UserInfo;
import React, { useEffect } from 'react';
import * as S from './styles';
import { RootState } from '../../../modules/redux';
import { useSelector } from 'react-redux';

interface PropsType {
    userInfo: any
    isMyPage: boolean
}

function UserInfo({ userInfo, isMyPage }: PropsType) {
    console.log(userInfo)
    return (
        <S.UserInfoWrapper>
            <S.UserImg />
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
                        <p>프로필 수정</p>
                    </S.EditProfile>
                    :
                    ''
                }
            </S.UserInfo>
        </S.UserInfoWrapper>
    )
}
export default UserInfo;
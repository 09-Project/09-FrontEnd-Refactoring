import React from 'react';
import * as S from './styles';
import UserActive from './UserActive';
import UserInfo from './UserInfo';
function Profile(){
    return(
        <S.ProfileWrapper>
            <S.Title>마이페이지</S.Title>
            <UserInfo/>
            <UserActive/>
        </S.ProfileWrapper>
    )
}
export default Profile;
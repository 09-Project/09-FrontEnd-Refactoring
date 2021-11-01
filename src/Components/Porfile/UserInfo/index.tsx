import React from 'react';
import * as S from './styles';

function UserInfo(){
    return(
        <S.UserInfoWrapper>
            <S.UserImg/>
            <S.UserInfo>
                <S.UserName>추혜연</S.UserName>
                <S.UserActive>
                    <S.Actives>상품 </S.Actives>
                    <S.Line/>
                    <S.Actives>찜 </S.Actives>
                </S.UserActive>
                <S.UserIntroduce>
                아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급식 뭐였지
                </S.UserIntroduce>
                <S.EditProfile>
                    <p>프로필 수정</p>
                </S.EditProfile>
            </S.UserInfo>
        </S.UserInfoWrapper>
    )
}
export default UserInfo;
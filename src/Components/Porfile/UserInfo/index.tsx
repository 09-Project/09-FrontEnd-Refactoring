import React,{useEffect} from 'react';
import * as S from './styles';
import { RootState } from '../../../modules/redux';
import { useSelector } from 'react-redux';

function UserInfo(){
    const myInfo = useSelector((state:RootState)=>state.myinfo)
    useEffect(()=>{
        console.log(myInfo.myInfoData)
    },[myInfo])
    return(
        <S.UserInfoWrapper>
            <S.UserImg/>
            <S.UserInfo>
                <S.UserName>{myInfo.myInfoData.name}</S.UserName>
                <S.UserActive>
                    <S.Actives>상품 {myInfo.myInfoData.all_posts_count}</S.Actives>
                    <S.Line/>
                    <S.Actives>찜 {myInfo.myInfoData.get_likes_count}</S.Actives>
                </S.UserActive>
                <S.UserIntroduce>
                    {myInfo.myInfoData.introduction}
                </S.UserIntroduce>
                <S.EditProfile>
                    <p>프로필 수정</p>
                </S.EditProfile>
            </S.UserInfo>
        </S.UserInfoWrapper>
    )
}
export default UserInfo;
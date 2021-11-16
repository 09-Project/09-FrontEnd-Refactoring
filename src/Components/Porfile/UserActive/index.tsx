import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_HOST } from '../../../constant/api';
import EachGoodsBox from '../../EachGoodsBox/EachGoodsBox';
import * as S from './styles';
function UserActive({ userInfo }: any) {
    const ING = 'ing';
    const WISH = 'wish';
    const PAST = 'past';
    const [selectedType, setSelectedType] = useState(ING);
    const onClickChangeType = (e: any) => {
        setSelectedType(e.target.id);
    }
    const [activities, setActivities] = useState([])
    useEffect(() => {
        const userId = userInfo.member_id;
        console.log(userId)
        if (selectedType === ING) {
            axios.get(`${API_HOST}/member/in-progress/${userId}`).then((res) => {
                // setActivities(res.data)
            })
        }
    }, [selectedType, userInfo])
    const [isMyPage, setIsMyPage] = useState(true);
    return (
        <S.UserActiveWrapper>
            <S.ActiveTypes>
                <S.TypeWrapper isMyPage={isMyPage}>
                    <S.EachType onClick={onClickChangeType} id={ING}>상품{selectedType === ING ? <S.SelectedType /> : ''}</S.EachType>
                    {isMyPage ? <S.EachType onClick={onClickChangeType} id={WISH}>찜한상품{selectedType === WISH ? <S.SelectedType /> : ''}</S.EachType> : ''}
                    <S.EachType onClick={onClickChangeType} id={PAST}>거래내역{selectedType === PAST ? <S.SelectedType /> : ''}</S.EachType>
                </S.TypeWrapper>
            </S.ActiveTypes>
            <S.GoodsList>
                {activities}
            </S.GoodsList>
        </S.UserActiveWrapper>
    )
}
export default UserActive
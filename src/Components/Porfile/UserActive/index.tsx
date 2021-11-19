import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_HOST } from '../../../constant/api';
import { RootState } from '../../../modules/redux';
import EachGoodsBox from '../../EachGoodsBox/EachGoodsBox';
import * as S from './styles';

interface PropsType {
    userInfo: any
    type: string | null
    isMyPage: boolean
}

function UserActive({ userInfo, type, isMyPage }: PropsType) {
    const ING = 'ing';
    const WISH = 'wish';
    const PAST = 'past';
    const onClickChangeType = (e: any) => {
        setSelectedType(e.target.id);
    }
    const [selectedType, setSelectedType] = useState(type);
    useEffect(() => {
        setSelectedType(type)
    }, [type])
    const [activities, setActivities] = useState<any[]>([])
    const WishList = useSelector((state: RootState) => state.setActivity.wishes)
    useEffect(() => {
        const userId = userInfo.member_id;
        console.log(userId)
        if (selectedType === ING) {
            axios.get(`${API_HOST}/member/in-progress/${userId}`).then((res) => {
                setActivities(res.data)
            })
        } else if (selectedType === WISH) {
            axios.get(`${API_HOST}/member/like`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('access_token')} ` }
            }).then(res => {
                setActivities(res.data)
                console.log(res.data)
            })
        } else if (selectedType === PAST) {
            axios.get(`${API_HOST}/member/completed/${userId}`).then((res) => {
                setActivities(res.data)
            })
        }
    }, [selectedType, userInfo, WishList])
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
                {activities.map((item, index) =>
                    <EachGoodsBox item={item} type="small" />
                )}
            </S.GoodsList>
        </S.UserActiveWrapper>
    )
}
export default UserActive
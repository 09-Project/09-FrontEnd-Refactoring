import React, { useState } from 'react';
import * as S from './styles';
function UserActive(){
    const ING = 'ing';
    const WISH = 'wish';
    const PAST = 'past';
    const [selectedType,setSelectedType] = useState(ING);
    const onClickChangeType = (e:any) => {
        setSelectedType(e.target.id);
    }
    const [isMyPage,setIsMyPage]= useState(true);
    return(
        <S.UserActiveWrapper>
            <S.ActiveTypes>
                <S.TypeWrapper isMyPage={isMyPage}>
                    <S.EachType onClick={onClickChangeType} id={ING}>상품{selectedType === ING ? <S.SelectedType/> : ''}</S.EachType>
                    {isMyPage ? <S.EachType onClick={onClickChangeType} id={WISH}>찜한상품{selectedType === WISH ? <S.SelectedType/> : ''}</S.EachType> : ''}
                    <S.EachType onClick={onClickChangeType} id={PAST}>거래내역{selectedType === PAST ? <S.SelectedType/> : ''}</S.EachType>
                </S.TypeWrapper>
            </S.ActiveTypes>
            <S.GoodsList>
                
            </S.GoodsList>
        </S.UserActiveWrapper>
    )
}
export default UserActive
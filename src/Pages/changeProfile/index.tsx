import React from 'react';
import ChangeSection from './ChangeSection';
import * as S from './styles'

function ChangeProfile() {
    return (
        <S.ChangeProfileWrapper>
            <S.Title>마이페이지</S.Title>
            <ChangeSection />
            <S.SubmitButton>완료</S.SubmitButton>
        </S.ChangeProfileWrapper>
    )
}
export default ChangeProfile
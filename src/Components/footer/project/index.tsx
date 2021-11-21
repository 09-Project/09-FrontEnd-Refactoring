import React from 'react'
import * as S from '../styles';
import Logo from '../../../assets/images/symbol_black.png'


function Project09() {
    return (
        <S.ProjectInfoWrapper>
            <S.SiteName>공동구매 사이트</S.SiteName>
            <S.ProjectName>2021 Project 09</S.ProjectName>
            <S.Logo src={Logo} />
        </S.ProjectInfoWrapper>
    )
}
export default Project09;
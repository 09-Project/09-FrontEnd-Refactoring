import React,{useState} from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTop from './HeaderTop';
import * as S from './styles';
interface PropsType {
}
const Header = (props:PropsType) => {
    return(
        <S.HeaderWrapper>
            <HeaderTop/>
            <HeaderBottom/>
        </S.HeaderWrapper>
    )
}
export default Header;
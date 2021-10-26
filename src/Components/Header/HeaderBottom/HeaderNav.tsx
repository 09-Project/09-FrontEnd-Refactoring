import React from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare,faUserAlt,faHeart } from '@fortawesome/free-solid-svg-icons'
const HeaderNav = () => {
    return(
        <S.NavWrapper>
            <S.NavA>
                <li>
                    <i><FontAwesomeIcon icon={faPlusSquare}/></i>
                    <p>게시물 올리기</p>
                </li>
            </S.NavA>
            <S.Line/>
            <S.NavA>
                <li>
                    <i><FontAwesomeIcon icon={faUserAlt}/></i>
                    <p>마이페이지</p>
                </li>
            </S.NavA>
            <S.Line/>
            <S.NavA>
                <li>
                    <i><FontAwesomeIcon icon={faHeart}/></i>
                    <p>찜한 상품</p>
                </li>
            </S.NavA>
        </S.NavWrapper>
    )
}
export default HeaderNav;
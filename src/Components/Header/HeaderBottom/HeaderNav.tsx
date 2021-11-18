import React from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faUserAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const HeaderNav = () => {
    return (
        <S.NavWrapper>
            <Link to="/upload">
                <S.NavA>
                    <li>
                        <i><FontAwesomeIcon icon={faPlusSquare} /></i>
                        <p>게시물 올리기</p>
                    </li>
                </S.NavA>
            </Link>
            <S.Line />
            <Link to="/profile?page=my_page&type=ing">
                <S.NavA>
                    <li>
                        <i><FontAwesomeIcon icon={faUserAlt} /></i>
                        <p>마이페이지</p>
                    </li>
                </S.NavA>
            </Link>
            <S.Line />
            <Link to="/profile?type=wish">
                <S.NavA>
                    <li>
                        <i><FontAwesomeIcon icon={faHeart} /></i>
                        <p>찜한 상품</p>
                    </li>
                </S.NavA>
            </Link>
        </S.NavWrapper>
    )
}
export default HeaderNav;
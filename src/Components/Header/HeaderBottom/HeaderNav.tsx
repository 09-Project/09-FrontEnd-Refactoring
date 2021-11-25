import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import plus from '../../../assets/images/Icon_plus.svg'
import profile from '../../../assets/images/Icon_person-outline.svg'
import blackHeart from '../../../assets/images/Icon_black_heart.svg'
const HeaderNav = () => {
    return (
        <S.NavWrapper>
            <Link to="/upload">
                <S.NavA>
                    <li>
                        <i><img src={plus} alt="" /></i>
                        <p>게시물 올리기</p>
                    </li>
                </S.NavA>
            </Link>
            <S.Line />
            <Link to="/profile?page=my_page&type=ing">
                <S.NavA>
                    <li>
                        <i><img src={profile} alt="" /></i>
                        <p>마이페이지</p>
                    </li>
                </S.NavA>
            </Link>
            <S.Line />
            <Link to="/profile?page=my_page&type=wish">
                <S.NavA>
                    <li>
                        <i><img src={blackHeart} alt="" /></i>
                        <p>찜한 상품</p>
                    </li>
                </S.NavA>
            </Link>
        </S.NavWrapper>
    )
}
export default HeaderNav;
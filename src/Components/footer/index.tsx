import React, { useEffect } from 'react';
import * as S from './styles'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { setSignuUp } from '../../modules/redux/action/page';
import Developers from './developers';
import Project09 from './project';
import { RootState } from '../../modules/redux';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Footer() {
    const query = useQuery();
    const location = useLocation();
    const dispatch = useDispatch()
    const setPage = () => dispatch(setSignuUp(location.pathname))
    const page = useSelector((state: RootState) => state.setPage.page);
    const isLogin = useSelector((state: RootState) => state.setIsLogin.isLogin)
    const history = useHistory()
    useEffect(() => {
        if (isLogin === false && (page !== '' && page !== '/' && page !== '/search' && page !== '/product' && page !== '/signup' && (page === '/profile' && query.get('page') === 'my_page'))) {
            history.push('/')
            alert('로그인이 필요합니다!')
        }
        if (isLogin === false && (page === '/upload')) {
            history.push('/')
            alert('로그인이 필요합니다!')
        }
    }, [page])
    useEffect(() => {
        setPage()
    }, [location.pathname])
    return (
        <S.FooterWrapper>
            {location.pathname === '/signup' ?
                '' :
                <>
                    <Developers />
                    <Project09 />
                </>
            }
        </S.FooterWrapper>
    )
}
export default Footer;
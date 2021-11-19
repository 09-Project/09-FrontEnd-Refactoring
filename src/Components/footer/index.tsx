import React, { useEffect } from 'react';
import * as S from './styles'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { setSignuUp } from '../../modules/redux/action/page';
import Developers from './developers';
import Project09 from './project';
function Footer() {
    const location = useLocation();
    const dispatch = useDispatch()
    const setPage = () => dispatch(setSignuUp(location.pathname))
    useEffect(() => {
        setPage()
    }, [location.pathname])
    return (
        <S.FooterWrapper>
            <Developers />
            <Project09 />
        </S.FooterWrapper>
    )
}
export default Footer;
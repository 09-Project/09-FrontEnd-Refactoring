import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../modules/redux';
import { setModalOn } from '../../modules/redux/action/modal'
import { setLogin } from '../../modules/redux/action/auth'

const HeaderTopWrapper = styled.section`
    width: 1150px;
    height: 44px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const LoginStatusDiv = styled.section`
    display: flex;
    margin-right: 52px;
    cursor: pointer;
    > div {
        margin: 0 5px;
    }
    > p {
        :hover{
        }
    }
`

const HeaderTop = () => {
    const isLogin = useSelector((state: RootState) => state.setIsLogin.isLogin);
    // const isLogin = localStorage.getItem('access_token');
    const dispatch = useDispatch()
    const ModalOn = () => dispatch(setModalOn())
    const SetLogin = (status: boolean) => dispatch(setLogin(status))
    useEffect(() => {
        console.log('asd')
        window.scrollTo(0, 0);
    }, [useLocation().search])
    return <HeaderTopWrapper>{isLogin ? <LoginStatusDiv><p onClick={() => {
        SetLogin(false);
        localStorage.removeItem("access_token");
    }}>로그아웃</p></LoginStatusDiv> : <LoginStatusDiv><p onClick={() => ModalOn()}>로그인</p><div>/</div><Link to="/signup"><p>회원가입</p></Link></LoginStatusDiv>}</HeaderTopWrapper>
}
export default HeaderTop;
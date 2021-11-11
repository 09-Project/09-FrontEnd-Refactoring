import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../modules/redux';
import {setModalOn} from '../../modules/redux/action/modal'
import {setLogin} from '../../modules/redux/action/auth'

type PropsType = {
    loginStatus : boolean;
    setLoginStatus : (e:boolean) => void;
}
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
    > div {
        margin: 0 5px;
    }
    > p {
        :hover{
        }
    }
`

const HeaderTop = () => {
    const isLogin = useSelector((state:RootState)=>state.setIsLogin.isLogin);
    const dispatch = useDispatch()
    const ModalOn = () => dispatch(setModalOn())
    const SetLogin = () => dispatch(setLogin())
    return <HeaderTopWrapper>{isLogin ? <LoginStatusDiv><p onClick={()=>{
        SetLogin();
        localStorage.removeItem("access_token");
    }}>로그아웃</p></LoginStatusDiv> : <LoginStatusDiv><p onClick={()=>ModalOn()}>로그인</p><div>/</div><Link to="/signup"><p>회원가입</p></Link></LoginStatusDiv>}</HeaderTopWrapper>
}
export default HeaderTop;
import React from 'react';
import styled from 'styled-components';
type PropsType = {
    isLogin : boolean;
    setLogin : (e:boolean) => void;
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
            color: blue;
        }
    }
`

const HeaderTop = ({isLogin,setLogin}:PropsType) => {
    return <HeaderTopWrapper>{isLogin ? <LoginStatusDiv><p>로그아웃</p></LoginStatusDiv> : <LoginStatusDiv><p onClick={()=>setLogin(true)}>로그인</p><div>/</div><p>회원가입</p></LoginStatusDiv>}</HeaderTopWrapper>
}
export default HeaderTop;
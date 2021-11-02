import React, { useState } from 'react';
import * as S from './styles';
import OutsideClickHandler from 'react-outside-click-handler';
interface PropsType {
    setLogin : (e:boolean)=>void
}
function LoginModal(props:PropsType){
    const {setLogin} = props;
    return(
        <S.LoginModalWrapper>
                <OutsideClickHandler
                    onOutsideClick={()=>{
                        setLogin(false);
                    }}
                >
                <S.Modal>
                    <S.CloseImg/>
                    <S.Logo/>
                    <S.ModalTitle>공동구매부터 무료나눔까지</S.ModalTitle>
                    <S.Login>LOG IN</S.Login>
                    <S.InputWrapper>
                        <S.Input placeholder="ID"/>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Input placeholder="PASSWORD"/>
                    </S.InputWrapper>
                    <S.SaveID>
                        <S.Checkbox type="checkbox"/>xz
                        <p>아이디 저장</p>
                    </S.SaveID>
                    <S.ButtonWrapper>
                        <S.Button color='white' backGroundColor="#4a55b5">LOGIN</S.Button>
                        <S.Button>JOIN US</S.Button>
                    </S.ButtonWrapper>
                </S.Modal>
        </OutsideClickHandler>
            </S.LoginModalWrapper>
    )
}
export default LoginModal;
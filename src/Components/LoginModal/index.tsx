import React, { ChangeEvent, useState } from 'react';
import * as S from './styles';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_HOST } from '../../constant/api';
import {setModalOff} from '../../modules/redux/action/modal';
import { useDispatch } from 'react-redux';
import {setLogin} from '../../modules/redux/action/auth'

interface PropsType {
}
function LoginModal(props:PropsType){
    const dispatch = useDispatch();
    const ModalOff = () => dispatch(setModalOff());
    const history = useHistory();
    const [loginContent,setLoginContent] = useState({
        username : '',
        password : ''
    })
    const {username,password} = loginContent;
    const onChangeLoginContent = (e:ChangeEvent<HTMLInputElement>) => {
        setLoginContent({
            ...loginContent,
            [e.target.name] : e.target.value
        })
    }
    const onClickSubmutLogin = () => {
        axios.post(API_HOST + '/auth/login',{
            username,
            password
        }).then(()=> {
            alert('로그인에 성공하였습니다.');
            history.push('/');
            dispatch(setLogin())
            dispatch(setModalOff())
        })
    }
    return(
        <S.LoginModalWrapper>
                <OutsideClickHandler
                    onOutsideClick={()=>{
                        ModalOff()
                    }}
                >
                <S.Modal>
                    <S.CloseImg/>
                    <S.Logo/>
                    <S.ModalTitle>공동구매부터 무료나눔까지</S.ModalTitle>
                    <S.Login>LOG IN</S.Login>
                    <S.InputWrapper>
                        <S.Input placeholder="ID" name="username" value={username} onChange={onChangeLoginContent}/>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Input placeholder="PASSWORD" name="password" value={password} onChange={onChangeLoginContent}/>
                    </S.InputWrapper>
                    <S.SaveID>
                        <S.Checkbox type="checkbox"/>
                        <p>아이디 저장</p>
                    </S.SaveID>
                    <S.ButtonWrapper>
                        <S.Button color='white' backGroundColor="#4a55b5" onClick={onClickSubmutLogin}>LOGIN</S.Button>
                        <Link to="/signup"><S.Button>JOIN US</S.Button></Link>
                    </S.ButtonWrapper>
                </S.Modal>
        </OutsideClickHandler>
            </S.LoginModalWrapper>
    )
}
export default LoginModal;
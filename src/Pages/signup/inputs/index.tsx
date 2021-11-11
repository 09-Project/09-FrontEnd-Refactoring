import React from 'react';
import * as S from './styles';
interface PropsType {
    signUpContent : any;
    onChangeSignUpContent : (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Inputs({signUpContent,onChangeSignUpContent}:PropsType){
    const InputArr = [
        {
            title : '닉네임',
            eyes : false,
            name : "name",
            value : signUpContent.name,
            onChange : onChangeSignUpContent

        },
        {
            title : '아이디',
            eyes : false,
            name : "username",
            value : signUpContent.username,
            onChange : onChangeSignUpContent
        },
        {
            title : '바밀번호',
            eyes : true,
            name : "password",
            value : signUpContent.password,
            onChange : onChangeSignUpContent
        },
        {
            title : '비밀번호 확인',
            eyes : true,
            name : 'checkpassword',
            value : signUpContent.checkpassword,
            onChange : onChangeSignUpContent
        }
    ]
    return(
        <S.InputsWrapper>
            {InputArr.map((item,index)=>
                <S.InputDiv>
                    <p>{item.title}</p>
                    <S.InputLabel>
                        <input type={item.eyes ? 'password' : 'text'} name={item.name} value={item.value} onChange={item.onChange} />
                    </S.InputLabel>
                </S.InputDiv>
            )}
        </S.InputsWrapper>
    )
}
export default Inputs;
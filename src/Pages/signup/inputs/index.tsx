import React from 'react';
import * as S from './styles';
interface PropsType {
    signUpContent: any;
    onChangeSignUpContent: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pagetype: string | null
}
function Inputs({ signUpContent, onChangeSignUpContent, pagetype }: PropsType) {
    const signupInputArr = [
        {
            title: '닉네임',
            eyes: false,
            name: "name",
            value: signUpContent.name,
            onChange: onChangeSignUpContent

        },
        {
            title: '아이디',
            eyes: false,
            name: "username",
            value: signUpContent.username,
            onChange: onChangeSignUpContent
        },
        {
            title: '바밀번호',
            eyes: true,
            name: "password",
            value: signUpContent.password,
            onChange: onChangeSignUpContent
        },
        {
            title: '비밀번호 확인',
            eyes: true,
            name: 'checkpassword',
            value: signUpContent.checkpassword,
            onChange: onChangeSignUpContent
        }
    ]
    const changePassword = [
        {
            title: '기존 비밀번호',
            eyes: false,
            name: 'beforePassword',
            value: signUpContent.beforePassword,
            onChange: onChangeSignUpContent
        },
        {
            title: '새 비밀번호',
            eyes: true,
            name: 'newPassword',
            value: signUpContent.newPassword,
            onChange: onChangeSignUpContent
        },
        {
            title: '새 비밀번호 확인',
            eyes: true,
            name: 'newPasswordCheck',
            value: signUpContent.newPasswordCheck,
            onChange: onChangeSignUpContent
        }
    ]
    return (
        <S.InputsWrapper>
            {(pagetype === 'changepassword' ? changePassword : signupInputArr).map((item, index) =>
                <S.InputDiv key={index}>
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
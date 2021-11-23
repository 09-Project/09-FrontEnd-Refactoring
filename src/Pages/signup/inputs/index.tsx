import React from 'react';
import invisible from '../../../assets/images/invisible.svg'
import visibleIcon from '../../../assets/images/visibleEye.svg'
import * as S from './styles';
type varName =
    'name'
    | 'username'
    | 'password'
    | 'checkpassword'
    | 'beforePassword'
    | 'newPassword'
    | 'newPasswordCheck'
interface PropsType {
    signUpContent: any;
    onChangeSignUpContent: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pagetype: string | null
    onToggleEyes: (name: varName) => void;
    visible: any
}
interface ArrayType {
    title: string
    eyes: boolean
    name: varName
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (name: varName) => void;
    visible: any
}
function Inputs({ signUpContent, onChangeSignUpContent, pagetype, onToggleEyes, visible }: PropsType) {
    const signupInputArr: ArrayType[] = [
        {
            title: '닉네임',
            eyes: false,
            name: "name",
            value: signUpContent.name,
            onChange: onChangeSignUpContent,
            onClick: onToggleEyes,
            visible: visible.name
        },
        {
            title: '아이디',
            eyes: false,
            name: "username",
            value: signUpContent.username,
            onChange: onChangeSignUpContent,
            onClick: onToggleEyes,
            visible: visible.username
        },
        {
            title: '비밀번호',
            eyes: true,
            name: "password",
            value: signUpContent.password,
            onChange: onChangeSignUpContent,
            onClick: onToggleEyes,
            visible: visible.password
        },
        {
            title: '비밀번호 확인',
            eyes: true,
            name: 'checkpassword',
            value: signUpContent.checkpassword,
            onChange: onChangeSignUpContent,
            onClick: onToggleEyes,
            visible: visible.checkpassword
        }
    ]
    const changePassword: ArrayType[] = [
        {
            title: '기존 비밀번호',
            eyes: false,
            name: 'beforePassword',
            value: signUpContent.beforePassword,
            onChange: onChangeSignUpContent,
            onClick: onToggleEyes,
            visible: visible.beforePassword
        },
        {
            title: '새 비밀번호',
            eyes: true,
            name: 'newPassword',
            value: signUpContent.newPassword,
            onChange: onChangeSignUpContent,
            onClick: onToggleEyes,
            visible: visible.newPassword
        },
        {
            title: '새 비밀번호 확인',
            eyes: true,
            name: 'newPasswordCheck',
            value: signUpContent.newPasswordCheck,
            onChange: onChangeSignUpContent,
            onClick: onToggleEyes,
            visible: visible.newPasswordCheck
        }
    ]
    return (
        <S.InputsWrapper>
            {(pagetype === 'changepassword' ? changePassword : signupInputArr).map((item, index) =>
                <S.InputDiv key={index}>
                    <p>{item.title}</p>
                    <S.InputLabel>
                        <input type={item.visible ? 'text' : 'password'} name={item.name} value={item.value} onChange={item.onChange} />
                        {item.eyes ?
                            <>
                                <label>
                                    <img src={item.visible ? visibleIcon : invisible} alt="" onClick={() => item.onClick(item.name)} />
                                </label>
                            </>
                            : ''
                        }
                    </S.InputLabel>
                </S.InputDiv>
            )}
        </S.InputsWrapper>
    )
}
export default Inputs;
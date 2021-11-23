import react, { ChangeEvent, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Inputs from './inputs';
import Introduce from './introduce';
import Logo from './logo';
import * as S from './styles';
import Banner_09 from '../../assets/images/banner_09.jpg'
import axios from 'axios';
import { API_HOST } from '../../constant/api';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router'

interface SignUpProps {
    onSetChangePassword: () => void;
    onSetSignUpPage: () => void;
}
type varName =
    'name'
    | 'username'
    | 'password'
    | 'checkpassword'
    | 'beforePassword'
    | 'newPassword'
    | 'newPasswordCheck'
interface VisibleType {
    name: boolean
    username: boolean
    password: boolean
    checkpassword: boolean
    beforePassword: boolean
    newPassword: boolean
    newPasswordCheck: boolean
}
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SignUp({
    onSetChangePassword,
    onSetSignUpPage
}: SignUpProps) {
    const history = useHistory();
    const location = useLocation();
    const [visible, setVisible] = useState<VisibleType>({
        name: false,
        username: false,
        password: false,
        checkpassword: false,
        beforePassword: false,
        newPassword: false,
        newPasswordCheck: false
    })
    const onToggleEyes = (name: varName) => {
        setVisible({
            ...visible,
            [name]: !visible[name],
        })
    }
    const [signUpContent, setSignUpContent] = useState({
        name: '',
        username: '',
        password: '',
        checkpassword: '',
        beforePassword: '',
        newPassword: '',
        newPasswordCheck: ''
    });
    const query = useQuery()
    const type = query.get('type')
    const { name, username, password, checkpassword, beforePassword, newPassword, newPasswordCheck } = signUpContent;
    const onChangeSignUpContent = (e: ChangeEvent<HTMLInputElement>) => {
        setSignUpContent({
            ...signUpContent,
            [e.target.name]: e.target.value
        })
    }
    const onClickSubmitSignUp = () => {
        if (type !== 'changepassword') {
            if (password === checkpassword) {
                axios.post(`${API_HOST}/auth/signup`, {
                    name,
                    username,
                    password
                }).then(() => {
                    alert('회원가입에 성공하였습니다.');
                    history.push('/');
                }).catch(res => console.log(res));
            } else alert('비밀번호가 일치하지 않습니다.');
        } else {
            if (newPassword === newPasswordCheck) {
                axios.patch(`${API_HOST}/member/password`, {
                    password: beforePassword,
                    new_password: newPassword
                }).then(() => {
                    alert('비밀번호 변경에 성공했습니다!')
                    history.push('/');
                }).catch(() => {
                    console.log('비밀번호이 일치하지 않습니다.')
                })
            }
        }
    }
    return (
        <S.SignUpWrapper>
            <S.SignUpContents>
                <Logo />
                <Introduce pagetype={type} />
                <S.SignUpBody>
                    <Inputs pagetype={type} signUpContent={signUpContent} onChangeSignUpContent={onChangeSignUpContent} onToggleEyes={onToggleEyes} visible={visible} />
                    <Banner isLarge={false} img={Banner_09} />
                </S.SignUpBody>
                <S.Buttons>
                    <button onClick={onClickSubmitSignUp}>확인</button>
                    <a href="/">취소</a>
                </S.Buttons>
            </S.SignUpContents>
        </S.SignUpWrapper>
    )
}
export default SignUp
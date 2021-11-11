import react, {ChangeEvent, useState} from 'react';
import Banner from '../../Components/Banner/Banner';
import Inputs from './inputs';
import Introduce from './introduce';
import Logo from './logo';
import * as S from './styles';
import Banner_09 from '../../assets/images/banner_09.jpg'
import axios from 'axios';
import { API_HOST } from '../../constant/api';
import { useHistory } from "react-router-dom";

interface SignUpProps{
    onSetChangePassword : () => void;
    onSetSignUpPage  : () => void;
}

function SignUp({
    onSetChangePassword,
    onSetSignUpPage
}:SignUpProps){
    const history = useHistory();
    const [signUpContent,setSignUpContent] = useState({
        name : '',
        username : '',
        password : '',
        checkpassword : ''
    });
    const {name,username,password,checkpassword} = signUpContent;
    const onChangeSignUpContent = (e: ChangeEvent<HTMLInputElement>) => {
        setSignUpContent({
            ...signUpContent,
            [e.target.name] : e.target.value
        })
    }
    const onClickSubmitSignUp = () => {
        if(password === checkpassword){
            axios.post(`${API_HOST}/auth/signup`,{
                name,
                username,
                password
            }).then(()=>{
                alert('회원가입에 성공하였습니다.');
                history.push('/');
            }).catch(res=>console.log(res));
        } else alert('비밀번호가 일치하지 않습니다.');
    }
    return(
        <S.SignUpWrapper>
            <S.SignUpContents>
                <Logo/>
                <Introduce/>
                <S.SignUpBody>
                    <Inputs signUpContent={signUpContent} onChangeSignUpContent={onChangeSignUpContent}/>
                    <Banner isLarge={false} img={Banner_09}/>
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
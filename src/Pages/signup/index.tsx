import react from 'react';
import Banner from '../../Components/Banner/Banner';
import Inputs from './inputs';
import Introduce from './introduce';
import Logo from './logo';
import * as S from './styles';
import Banner_09 from '../../assets/images/banner_09.jpg'

interface SignUpProps{
    onSetChangePassword : () => void;
    onSetSignUpPage  : () => void;
}

function SignUp({
    onSetChangePassword,
    onSetSignUpPage
}:SignUpProps){
    return(
        <S.SignUpWrapper>
            <S.SignUpContents>
                <Logo/>
                <Introduce/>
                <S.SignUpBody>
                    <Inputs/>
                    <Banner isLarge={false} img={Banner_09}/>
                </S.SignUpBody>
            </S.SignUpContents>
        </S.SignUpWrapper>
    )
}
export default SignUp
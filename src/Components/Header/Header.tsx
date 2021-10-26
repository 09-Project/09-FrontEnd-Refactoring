import React,{useState} from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTop from './HeaderTop';
import * as S from './styles';
const Header:React.FC = () => {
    const [isLogin,setIsLogin] = useState(false);
    return(
        <S.HeaderWrapper>
            <HeaderTop isLogin={isLogin}/>
            <HeaderBottom/>
        </S.HeaderWrapper>
    )
}
export default Header;
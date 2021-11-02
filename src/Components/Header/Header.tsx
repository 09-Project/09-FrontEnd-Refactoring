import React,{useState} from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTop from './HeaderTop';
import * as S from './styles';
interface PropsType {
    setLogin : (e:boolean) => void;
}
const Header = (props:PropsType) => {
    const {setLogin} = props;
    const [isLogin,setIsLogin] = useState(false);
    return(
        <S.HeaderWrapper>
            <HeaderTop setLogin={setLogin} isLogin={isLogin}/>
            <HeaderBottom/>
        </S.HeaderWrapper>
    )
}
export default Header;
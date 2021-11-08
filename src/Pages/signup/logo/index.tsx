import react from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom';
import Symbol from '../../../assets/images/Symbol.png'
import Logo09 from '../../../assets/images/logo_09.png';
function Logo(){
    return(
        <S.Link>
                <Link to="/">
                <S.Symbol src={Symbol}/>
                <S.Logo src={Logo09}/>
            </Link>
        </S.Link>
    )
}
export default Logo
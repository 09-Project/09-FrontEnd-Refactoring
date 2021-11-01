import React from 'react'
import * as S from './styles';
import Symbol from '../../../assets/images/Symbol.png'
import Logo09 from '../../../assets/images/logo_09.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SearchBox = () => {
    return(
        <S.HeaderLogoNSearch>
            <Link to ="/">
                <S.LogoNSymbol>
                    <S.Logo img={Symbol} margin={11}/>
                    <S.Logo isMain={true} img={Logo09}/>
                </S.LogoNSymbol>
            </Link>
            <S.SearchBox>
                <input type="text" placeholder="상품명을 입력하세요." />
                <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faSearch}/>
            </S.SearchBox>
        </S.HeaderLogoNSearch>
    )
}
export default SearchBox;
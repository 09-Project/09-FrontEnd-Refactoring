import React from 'react';
import HeaderNav from './HeaderNav';
import SearchBox from './SearchBox';
import * as S from './styles'
const HeaderBottom = () => {
    return(
        <S.HeaderBottomWrapper>
            <div>
                <SearchBox/>
                <HeaderNav/>
            </div>
        </S.HeaderBottomWrapper>
    )
}
export default HeaderBottom
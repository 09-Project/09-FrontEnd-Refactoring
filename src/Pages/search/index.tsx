import React from 'react';
import GoodsListBox from '../../Components/GoodsListBox/GoodsListBox';
import * as S from './styles'


function SearchPage() {
    return (
        <S.SearchPageWrapper>
            <GoodsListBox type="search" />
        </S.SearchPageWrapper>
    )
}
export default SearchPage;
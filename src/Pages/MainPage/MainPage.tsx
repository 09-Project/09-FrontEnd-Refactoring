import React from 'react';
import * as S from './styles'
import Banner from '../../Components/Banner/Banner';
import GoodsListBox from '../../Components/GoodsListBox/GoodsListBox';
const MainPage:React.FC = () => {
    return(
        <S.MainPageWrapper>
            <Banner/>
            <GoodsListBox/>
        </S.MainPageWrapper>
    )
}
export default MainPage;
import React from 'react';
import * as S from './styles'
import Banner from '../../Components/Banner/Banner';
import GoodsListBox from '../../Components/GoodsListBox/GoodsListBox';
import Banner_09 from '../../assets/images/banner_09.jpg'
const MainPage:React.FC = () => {
    return(
        <S.MainPageWrapper>
            <Banner isLarge={true} img={Banner_09}/>
            <GoodsListBox/>
        </S.MainPageWrapper>
    )
}
export default MainPage;
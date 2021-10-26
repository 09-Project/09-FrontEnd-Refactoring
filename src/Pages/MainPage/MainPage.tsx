import React from 'react';
import * as S from './styles'
import Banner from '../../Components/Banner/Banner';
const MainPage:React.FC = () => {
    return(
        <S.MainPageWrapper>
            <Banner/>
        </S.MainPageWrapper>
    )
}
export default MainPage;
import React from 'react';
import * as S from './styles';

interface PropsType {
    isLarge : boolean;
    img : any;
}
const Banner = (props:PropsType) => {
    return <S.BannerWrapper isLarge={props.isLarge} img={props.img} />
}
export default Banner;
import React from 'react';
import * as S from './styles';
import Location from '../../assets/images/location.gif'
interface PropsType {
    item : any;
}
const EachGoodsBox = (props:PropsType) => {
    return(
        <S.GoodsBoxWrapper>
            <S.GoodsLink>
                <S.GoodsImgDiv>
                    <S.GoodsImg img={props.item.image} />
                </S.GoodsImgDiv>
                <S.GoodsInfo>
                    <p>{props.item.title}</p>
                    <div>
                        <div>
                            {props.item.purpose === "DONATION" ? <S.Donation>무료나눔</S.Donation> : <div><S.Price>{props.item.price}</S.Price><S.Won>원</S.Won></div>}
                        </div>
                    </div>
                    <S.PostType>
                        <p>{props.item.purpose === "DONATION" ? '기부' : '공동구매'}</p>
                    </S.PostType>
                </S.GoodsInfo>
            </S.GoodsLink>
            <S.Location>
                <i>
                    <img src={Location} alt="" />
                </i>
                <div>{props.item.transaction_region}</div>
            </S.Location>
        </S.GoodsBoxWrapper>
    )
}
export default EachGoodsBox;
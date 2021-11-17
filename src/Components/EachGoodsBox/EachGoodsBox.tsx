import React, { useState } from 'react';
import * as S from './styles';
import Location from '../../assets/images/location.gif'
import { Link } from 'react-router-dom';
import Heart from '../../assets/images/Icon_heart.svg'
import HeartBlack from '../../assets/images/Icon_black_heart.svg'
import axios from 'axios';
import { API_HOST } from '../../constant/api';
interface PropsType {
    item: any;
    onClickHeart: (item: any) => void
}
const EachGoodsBox = (props: PropsType) => {
    return (
        <S.GoodsBoxWrapper>
            <Link to={'/product?post_id=' + props.item.id}>
                <S.GoodsLink>
                    <S.GoodsImgDiv>
                        <S.GoodsImg img={props.item.image} />
                    </S.GoodsImgDiv>
                    <S.GoodsInfo marginTop={props.item.purpose === "DONATION" ? 11 : 0}>
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
            </Link>
            <S.Location>
                <i>
                    <img src={Location} style={{ width: '12px' }} alt="" />
                </i>
                <div>{props.item.transaction_region}</div>
                <i style={{ marginLeft: 'auto', marginRight: '10px' }}>
                    <img id={props.item.liked ? 'true' : 'false'} src={props.item.liked ? Heart : HeartBlack} alt="" onClick={() => props.onClickHeart(props.item)} />
                </i>
            </S.Location>
        </S.GoodsBoxWrapper>
    )
}
export default EachGoodsBox;
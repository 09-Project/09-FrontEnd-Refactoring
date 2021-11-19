import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_HOST } from '../../constant/api';
import { RootState } from '../../modules/redux';
import EachGoodsBox from '../EachGoodsBox/EachGoodsBox';
import * as S from './style';
import { useLocation } from 'react-router';
import { setWish } from '../../modules/redux/action/myactivity';

interface PageInfoType {
    type?: string
}
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const GoodsListBox = (props: PageInfoType) => {
    const isLogin = useSelector((state: RootState) => state.setIsLogin.isLogin);
    const [startPageIndex, setStartPageIndex] = useState(1);
    const [selectedPage, setSelectedPage] = useState(1);
    const [thisPageList, setThisPageList] = useState([]);
    const query = useQuery();
    const [pagenation, setPagenation] = useState(0);
    const keyword = query.get('keyword');
    const wishList = useSelector((state: RootState) => state.setActivity.wishes);
    const dispatch = useDispatch()
    const onClickSelectBtn = (e: number) => {
        setSelectedPage(e);
    }
    const onClickSetStartPage = (e: string) => {
        const pagenationLast = pagenation >= 5 ? pagenation - 4 : 1;
        if (e === 'preve') setStartPageIndex(Math.max(startPageIndex - 1, 1));
        else setStartPageIndex(Math.min(startPageIndex + 1, pagenationLast));
    }
    // const onClickHeart = (item: any) => {
    //     if (!item.liked) {
    //         axios.post(API_HOST + '/like/' + item.id).then(() => { dispatch(setWish()) })
    //     } else {
    //         axios.delete(API_HOST + '/like/' + item.id).then(() => { dispatch(setWish()) })
    //     }
    // }
    useEffect(() => {
        const login = localStorage.getItem('access_token')
        if (login && !keyword) {
            axios.get(`${API_HOST}/post?page=${selectedPage - 1}`, {
                headers: { Authorization: `Bearer ${login} ` }
            }).then(res => {
                setThisPageList(res.data.posts)
                setPagenation(Math.ceil(res.data.count / 16))
            })
        } else if (!login && !keyword) {
            axios.get(`${API_HOST}/post?page=${selectedPage - 1}`).then(res => {
                setThisPageList(res.data.posts)
                setPagenation(Math.ceil(res.data.count / 16))
            })
        }
        if (keyword) {
            axios.get(`${API_HOST}/post/search?keyword=${keyword}&page=${selectedPage - 1}`).then(res => {
                setThisPageList(res.data.posts)
                setPagenation(Math.ceil(res.data.count / 16))
            })
        }
    }, [selectedPage, isLogin, keyword, wishList])
    return (
        <S.GoodsListBoxWrapper>
            {props.type === 'search' ?
                <S.Title>
                    <p>"{keyword}"</p>
                    검색결과
                </S.Title> :
                <S.Title>추천 상품</S.Title>
            }
            <S.ListBox>
                {thisPageList.map((item, index) => {
                    return <EachGoodsBox key={index} item={item} />
                })}
            </S.ListBox>
            <S.ChangePageBtns>
                <S.ArrowBtn onClick={() => onClickSetStartPage('preve')}>{"<"}</S.ArrowBtn>
                {Array(pagenation > 5 ? 5 : pagenation).fill(void 0).map((item, index) => {
                    const targetPage = startPageIndex + index;
                    if (targetPage === selectedPage) return (
                        <S.ChangePageBtn key={index} onClick={() => onClickSelectBtn(targetPage)}>{targetPage}</S.ChangePageBtn>
                    )
                    return (
                        <S.SelectBtn key={index} onClick={() => onClickSelectBtn(targetPage)}>{targetPage}</S.SelectBtn>
                    )
                })}
                <S.ArrowBtn onClick={() => onClickSetStartPage('next')}>{">"}</S.ArrowBtn>
            </S.ChangePageBtns>
        </S.GoodsListBoxWrapper>
    )
}
export default GoodsListBox;
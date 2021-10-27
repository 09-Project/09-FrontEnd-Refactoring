import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_HOST } from '../../constant/api';
import EachGoodsBox from '../EachGoodsBox/EachGoodsBox';
import * as S from './style';
const GoodsListBox = () => {
    const [startPageIndex,setStartPageIndex] = useState(1);
    const [selectedPage,setSelectedPage] = useState(1);
    const [thisPageList,setThisPageList] = useState([]);
    const onClickSelectBtn = (e:number) => {
        setSelectedPage(e);
    }
    const onClickSetStartPage = (e:string) => {
        if(e === 'preve') setStartPageIndex(Math.max(startPageIndex - 1, 1));
        else setStartPageIndex(startPageIndex + 1);
    }
    useEffect(()=> {
        axios.get(API_HOST+'/post').then(res=>setThisPageList(res.data))
    },[selectedPage])
    return(
        <S.GoodsListBoxWrapper>
            <S.Title>추천 상품</S.Title>
            <S.ListBox>
                {thisPageList.map((item,index)=>{
                    return <EachGoodsBox item={item}/>
                })}
            </S.ListBox>
            <S.ChangePageBtns>
                <S.ArrowBtn onClick={()=>onClickSetStartPage('preve')}>{"<"}</S.ArrowBtn>
                {Array(5).fill(void 0).map((item,index)=>{
                    const targetPage = startPageIndex + index;
                    if(targetPage === selectedPage) return(
                        <S.ChangePageBtn onClick={()=>onClickSelectBtn(targetPage)}>{targetPage}</S.ChangePageBtn>
                    )
                    return (
                        <S.SelectBtn onClick={()=>onClickSelectBtn(targetPage)}>{targetPage}</S.SelectBtn>
                    )
                })}
                <S.ArrowBtn onClick={()=>onClickSetStartPage('next')}>{">"}</S.ArrowBtn>
            </S.ChangePageBtns>
        </S.GoodsListBoxWrapper>
    )
}
export default GoodsListBox;
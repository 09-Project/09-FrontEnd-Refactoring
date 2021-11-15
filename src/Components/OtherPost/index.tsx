import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_HOST } from '../../constant/api';
import * as S from './styles'

interface ItemType {
    id : number;
    title : string;
    image? : string;
    completed : string;
    liked : boolean;
}

function OtherPosts(){
    const [otherPosts,setOtherPosts] = useState([])
    useEffect(()=>{
        axios.get(API_HOST+'/post/other').then(res=>setOtherPosts(res.data));
    },[])
    return(
        <S.OtherPostsWrapper>
            <p>다른 상품 보기</p>
            <S.OtherPostsList>
                {otherPosts.map((item:ItemType)=>
                    <Link to={`/product?post_id=${item.id}`}>
                        <S.OtherPostImg img={item?.image}/>
                        <p>{item.title}</p>
                    </Link>
                )}
            </S.OtherPostsList>
        </S.OtherPostsWrapper>
    )
}
export default OtherPosts
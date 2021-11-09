import React,{useEffect, useState} from 'react';
import { API_HOST } from '../../constant/api';
import * as S from './styles'
import { useLocation } from 'react-router';
import axios from 'axios';
import DefaultProfile from '../../assets/images/defaultProfile.svg'
import OtherPosts from '../../Components/OtherPosts';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
interface PostType {
    image : string;
    completed : string;
    content : string;
    created_date : string;
    every_like_counts : number;
    get_likes : number;
    liked : boolean;
    member_id : number;
    member_introduction? : string;
    member_name : string;
    member_profile? : string;
    open_chat_link : string;
    posts_count : number;
    price? : number;
    purpose : string;
    title : string;
    transaction_region : string;
    updated_date : string;
}
function GoodsDetail(){
    const query = useQuery();
    const location = useLocation();
    const post_id = query.get('post_id');
    const [thisPageInfo,setThisPageInfo] = useState<PostType>()
    useEffect(()=>{
        axios.get(API_HOST+'/post/'+post_id).then(res=>setThisPageInfo(res.data));
    },[location.search]);
    return(
        <S.goodsDetailWrapper>
            <S.Introduce>
                <S.SimpleInfo>
                    <a href={thisPageInfo?.image}>
                        <S.Img img={thisPageInfo?.image}/>
                    </a>
                    <S.Details>
                        <S.GoodsTitle>{thisPageInfo?.title}</S.GoodsTitle>
                        {thisPageInfo?.purpose === 'DONATION' ? <S.Donation>무료나눔</S.Donation> : <S.Price>{thisPageInfo?.price}<p>원</p></S.Price>}
                        <S.Line/>
                        <S.HeartCount>
                            <p>{thisPageInfo?.get_likes}</p>
                        </S.HeartCount>
                        <S.OpenChattingLink>
                            <a href={thisPageInfo?.open_chat_link}>{thisPageInfo?.open_chat_link}</a>
                        </S.OpenChattingLink>
                        <S.Writer><p>{thisPageInfo?.member_name}</p></S.Writer>
                        <S.RemoveButton>
                            <button>삭제</button>
                        </S.RemoveButton>
                    </S.Details>
                </S.SimpleInfo>
                <S.DetailInfo>
                    <S.IntroduceType>
                        <S.Type>상품설명</S.Type>
                        <S.Type marginLeft={694}>판매자 정보</S.Type>
                    </S.IntroduceType>
                    <S.IntroduceWrapper>
                        <S.IntroduceContent>
                            {thisPageInfo?.content}
                        </S.IntroduceContent>
                        <S.Profile>
                            <S.ProfileTop>
                                <img src={thisPageInfo?.member_profile || DefaultProfile}/>
                                <S.UserDetails>
                                    <p>{thisPageInfo?.member_name}</p>
                                    <S.UserActive>
                                        <S.ProductCount>
                                            상품 {thisPageInfo?.posts_count}
                                        </S.ProductCount>
                                        <S.WishCountt>
                                            찜 {thisPageInfo?.every_like_counts}
                                        </S.WishCountt>
                                    </S.UserActive>
                                        <S.VisitProfile>
                                            페이지 방문
                                        </S.VisitProfile>
                                </S.UserDetails>
                            </S.ProfileTop>
                        </S.Profile>
                    </S.IntroduceWrapper>
                </S.DetailInfo>
            </S.Introduce>
            <OtherPosts/>
        </S.goodsDetailWrapper>
    )
}
export default GoodsDetail;
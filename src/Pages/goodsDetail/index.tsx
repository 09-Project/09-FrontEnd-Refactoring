import React, { useEffect, useState } from 'react';
import { API_HOST } from '../../constant/api';
import * as S from './styles'
import { useLocation } from 'react-router';
import axios from 'axios';
import DefaultProfile from '../../assets/images/defaultProfile.svg'
import Icon_heart from '../../assets/images/Icon_heart.svg'
import Icon_Link from '../../assets/images/Icon_link.svg'
import OtherPosts from '../../Components/OtherPost';
import Icon_person from '../../assets/images/Icon_person-outline.svg';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/redux';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
interface PostType {
    image: string;
    completed: string;
    content: string;
    created_date: string;
    every_like_counts: number;
    get_likes: number;
    liked: boolean;
    member_id: number;
    member_introduction?: string;
    member_name: string;
    member_profile?: string;
    open_chat_link: string;
    posts_count: number;
    price?: number;
    purpose: string;
    title: string;
    transaction_region: string;
    updated_date: string;
    member_info: any;
}
function GoodsDetail() {
    const query = useQuery();
    const post_id = query.get('post_id');
    const [thisPageInfo, setThisPageInfo] = useState<PostType>()
    const memberName = useSelector((state: RootState) => state.setMember.info.name)
    console.log(memberName)
    console.log(thisPageInfo?.member_info.member_name)
    const [isMine, setIsMine] = useState(memberName === thisPageInfo?.member_info.member_name)
    useEffect(() => {
        axios.get(API_HOST + '/post/' + post_id).then(res => {
            setThisPageInfo(res.data)
        });
    }, [post_id]);
    const history = useHistory();
    const onClickFinishPost = () => {
        axios.put(API_HOST + '/post/' + post_id).then(() => {
            alert('거래 종료를 성공적으로 완료했습니다!')
            history.push('/')
        })
    }
    const onClickRemovePost = () => {
        axios.delete(API_HOST + '/post/' + post_id).then(() => {
            alert("삭제에 성공했습니다");
            history.push('/');
        })
    }
    useEffect(() => {
        if (memberName === thisPageInfo?.member_info.member_name) setIsMine(true)
        else setIsMine(false)
    }, [thisPageInfo?.member_info.member_name])
    return (
        <S.goodsDetailWrapper>
            <S.Introduce>
                <S.SimpleInfo>
                    <a href={thisPageInfo?.image}>
                        <S.Img img={thisPageInfo?.image} />
                    </a>
                    <S.Details>
                        <S.GoodsTitle>{thisPageInfo?.title}</S.GoodsTitle>
                        {thisPageInfo?.purpose === 'DONATION' ? <S.Donation>무료나눔</S.Donation> : <S.Price>{thisPageInfo?.price}<p>원</p></S.Price>}
                        <S.Line />
                        <S.HeartCount>
                            <S.Icon><img src={Icon_heart} alt="" /></S.Icon><p>{thisPageInfo?.get_likes}</p>
                        </S.HeartCount>
                        <S.OpenChattingLink>
                            <S.Icon><img src={Icon_Link} alt="" /></S.Icon><a href={thisPageInfo?.open_chat_link}>{thisPageInfo?.open_chat_link}</a>
                        </S.OpenChattingLink>
                        <S.Writer><p><S.Icon><img src={Icon_person} alt="" /></S.Icon>{thisPageInfo?.member_info.member_name}</p></S.Writer>
                        {
                            isMine ?
                                <S.Buttons>
                                    <S.FinishButton onClick={onClickFinishPost}>
                                        완료
                                    </S.FinishButton>
                                    <S.RemoveButton onClick={onClickRemovePost}>
                                        삭제
                                    </S.RemoveButton>
                                </S.Buttons>
                                : ''
                        }
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
                                <img src={thisPageInfo?.member_info.member_profile || DefaultProfile} />
                                <S.UserDetails>
                                    <p>{thisPageInfo?.member_info.member_name}</p>
                                    <S.UserActive>
                                        <S.ProductCount>
                                            상품 {thisPageInfo?.member_info.posts_count}
                                        </S.ProductCount>
                                        <S.WishCountt>
                                            찜 {thisPageInfo?.member_info.every_like_counts}
                                        </S.WishCountt>
                                    </S.UserActive>
                                    <Link to={`/profile?type=ing&id=${thisPageInfo?.member_info.member_id}`}>
                                        <S.VisitProfile>
                                            페이지 방문
                                        </S.VisitProfile>
                                    </Link>
                                </S.UserDetails>
                            </S.ProfileTop>
                        </S.Profile>
                    </S.IntroduceWrapper>
                </S.DetailInfo>
            </S.Introduce>
            <OtherPosts />
        </S.goodsDetailWrapper>
    )
}
export default GoodsDetail;
import styled from "styled-components";
import Default from '../../assets/images/defaultProfile.svg';
import DefaultGoods from '../../assets/images/defaultGoods.png'
interface StyleProps {
    img?: string;
    marginLeft?: number;
}

export const goodsDetailWrapper = styled.section`
    width: 100%;
    margin-bottom: 140px;
`
export const Introduce = styled.div`
    width: 1150px;
    margin: 0 auto;
    margin-top: 100px;
`
export const SimpleInfo = styled.div`
    display: flex;
`
export const ImgDiv = styled.div`
    width: 400px;
    height: 400px;
    position: relative;
`
export const Heart = styled.i`
    position: absolute;
    bottom : 16px;
    right : 16px;
`
export const Img = styled.div`
    background-image: url(${(props: StyleProps) => props.img || DefaultGoods});
    width: 400px;
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`
export const Details = styled.div`
    width: 750px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 40px;
    color: #686868;
`
export const GoodsTitle = styled.p`
    font-size: 36px;
    font-weight: bold;
    margin: 0 0 12px 0;
`
export const Donation = styled.p`
    font-size: 32px;
    color: black;
    font-weight: bold;
`
export const Price = styled.p`
    display: flex;
    font-size: 32px;
    font-weight: bold;
    p { 
        font-weight: bold;
        box-sizing: border-box;
        padding-top: 14px;
        font-size: 20px;
        margin: 0;
    }
`
export const Line = styled.div`
    margin: 40px 0 12px 0;
    border-bottom: 1px solid #707070;
`
export const HeartCount = styled.div`
    display: flex;
    align-items: center;
    p{
        margin: 0 0 0 4px;
    }
`
export const OpenChattingLink = styled(HeartCount)`
    margin-top: 35px;
    display: flex;
    align-items: center;
    a{
        text-decoration: none;
        color: black;
    }
`
export const Writer = styled(HeartCount)`
    margin-top:28px;
    display: flex;
    align-items: center;
`
export const Buttons = styled.div`
    
margin-top: 5px;
margin-left: auto;
`
export const FinishButton = styled.button`
    width: 120px;
    height: 40px;
    border: 2px solid #4a55b5;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    background-color: #4a55b5;
    margin-right: 20px;
`
export const RemoveButton = styled.button`
    width: 120px;
    height: 40px;
    border: 2px solid #4a55b5;
    color: #4a55b5;
    background-color: white;
    font-size: 18px;
    font-weight: bold;
`
export const DetailInfo = styled.div`
    margin-top : 80px;
`
export const IntroduceType = styled.div`
    display: flex;
    padding-bottom: 24px;
    border-bottom: 1px solid #707070;
`
export const Type = styled.p`
    margin-left: ${(props: StyleProps) => props.marginLeft || '37'}px;
`
export const Contents = styled.div`
    display: flex;
`
export const IntroduceWrapper = styled.div`
    display : flex;
`
export const IntroduceContent = styled.div`
    width: 707px;
    font-size: 18px;
    color: #818181;
    padding: 36px 22px 39px 37px;
    border-right: 1px solid #707070;
`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    padding: 36px 0 28px 38px;
`
export const ProfileTop = styled.div`
    display:flex;
    img { 
        width: 108px;
        height: 108px;
        margin-right: 22px;
    }
`
export const UserDetails = styled.div``
export const UserActive = styled.div`
    display: flex;
    margin-top: 8px;
`
export const ProductCount = styled.p`
    padding-right: 12px;
    border-right: 1px solid #686868;
    font-size: 14px;
    color: #686868;
`
export const WishCountt = styled.p`
    font-size: 14px;
    color: #686868;
    padding-left: 12px;
`
export const VisitProfile = styled.div`
    width: 100px;
    height: 40px;
    border: none;
    color: white;
    font-size: 12px;
    font-weight: bold;
    margin-top: 16px;
    background-color: #4a55b5;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Icon = styled.i`
    margin-right: 12px;
`
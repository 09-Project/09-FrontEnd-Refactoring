import styled from "styled-components";
import DefaultImg from '../../assets/images/defaultGoods.png';
interface PropsType {
    img? : string;
}

export const OtherPostsWrapper = styled.section`
    margin: 22px auto 0 auto;
    width: 1150px;
    > p {
        margin-left: 34px;
        font-size: 20px;
        font-weight: bold;
    }
`
export const OtherPostsList = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px 34px 0 34px;
    display: flex;
    justify-content: space-between;
    p { 
        margin-top: 8px;
        font-size: 14px;
    }
`
export const OtherPostImg = styled.div`
    width: 120px;
    height: 120px;
    background-image: url(${(props:PropsType)=>props.img || DefaultImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    border: 1px solid lightgray;
`
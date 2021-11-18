import styled from "styled-components";
import Default from '../../assets/images/defaultProfile.svg'
interface PorpsType {
    img?: any
    marginTop?: number;
    type?: string;
}

export const GoodsBoxWrapper = styled.div`
    width: ${(props: PorpsType) => props.type === 'small' ? 180 : 220}px;
    /* margin: 0 43px 40px 0; */
    margin: ${(props: PorpsType) => props.type === 'small' ? '0 29px 40px 0 ' : '0 43px 40px 0'};
`
export const GoodsLink = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
`

export const GoodsImgDiv = styled.div`
    width: 100%;
    height: 220px;
    height: ${(props: PorpsType) => props.type === 'small' ? 180 : 220}px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9a9a9a;
    position: relative;
`
export const GoodsImg = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    font-size: 30px;
    font-family: "Noto Sans CJK KR";
    font-weight: bold;
    background-image: url(${(props: PorpsType) => props.img || Default});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`
export const GoodsInfo = styled.section`
    width: 100%;
    border-bottom: 1px solid #707070;
    position: relative;
    margin-top: ${(props: PorpsType) => props.marginTop || 0}px;
    > p {
        margin: 0;
        padding: 11px 0 0 16px;
        /* padding: ${(props: PorpsType) => props.type === 'small' ? '5px 0 0 16px' : '11px 0 0 16px'}; */
        font-size: 18px;
        font-family: "Noto Sans CJK KR";
    }
    >div{
        padding: 4px 0 12px 16px;
        margin: 0;
        display: flex;
        font-family: "Noto Sans CJK KR";
        /* padding-bottom: 12px; */
        >div{
            display:flex;
            > p {
                font-weight: bold;
                margin: 0;
                font-size: 24px;
                margin-right: 4px;
            }
            > div {
                font-size: 16px;
                /* margin-top: 11px; */
                display: flex;
            }
        }
    }

`
export const PostType = styled.section`
    position: absolute;
    background-color: #4a55b5;
    color: white;
    border-radius: 5px;
    display: flex;
    width: ${(props: PorpsType) => props.type === 'small' ? 40 : 60}px;
    height: 30px;
    height: ${(props: PorpsType) => props.type === 'small' ? 20 : 30}px;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
    right: 8px;
    bottom: 14px;
    > p {
        font-size: ${(props: PorpsType) => props.type === 'small' ? 10 : 16}px;
        font-weight: bold;
        font-family: "Noto Sans CJK KR";
        display: flex;
    }
`
export const Price = styled.p`
    font-weight: bold;
    margin: 0;
    font-size: 24px;
    margin-right: 4px;
    /* width: 85px; */
    max-width: 85px;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Won = styled.p`
    font-size: 16px;
    margin-top: 11px;
`
export const Donation = styled.p`
    font-size: 24px;
    font-weight: bold;
    display: flex;
    color: black;
`
export const Location = styled.section`
    display: flex;
    align-items: center;
    padding: 5px 0;
    background-color: white;
    > i {
        /* width : 12px; */
        height:16px;
        margin: 0 0 0 16px;
        display: flex;
        align-items: center;
        >img{
            width: 100%;
            height: 100%;
        }
    }
    >div {
        margin: 0 0 0 8px;
    }
`
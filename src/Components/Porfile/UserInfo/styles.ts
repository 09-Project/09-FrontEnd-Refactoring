import styled from "styled-components";

export const UserInfoWrapper = styled.div`
    margin: 60px 0 0 37px;
    display: flex;
    align-items: center;
`
export const UserImg = styled.img`
    width: 240px;
    height: 240px;
`
export const UserInfo = styled.section`
    margin-left: 32px;
`
export const UserName = styled.p`
    font-size: 28px;
    font-family: "Noto Sans CJK KR";
    font-weight: bold;
`
export const UserActive = styled.div`
    display: flex;
    margin-top: 12px;
`
export const Actives = styled.p`
    font-size: 14px;
    font-family: "Noto Sans CJK KR";
    font-weight: normal;
`
export const Line = styled.div`
    margin: 0 20px;
    border-left: 1px solid #686868;
`
export const UserIntroduce = styled.p`
    margin-top: 28px;
    width: 360px;
    font-family: "Noto Sans CJK KR";
    font-size: 18px;
    color: #818181;
`
export const EditProfile = styled.div`
    margin-top: 28px;
    width: 120px;
    height: 40px;
    background-color: #4a55b5;
    display: flex;
    align-items: center;
    justify-content: center;
    > a > p {
        color: white;
        font-family: "Noto Sans CJK KR";
        font-weight: bold;
        font-size: 16px;
    }
`
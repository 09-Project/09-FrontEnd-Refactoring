import styled from "styled-components";

export const SignUpWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`
export const SignUpContents = styled.div`
    width: 1300px;
    margin: 0 auto;
`
export const SignUpBody = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`
export const Buttons = styled.div`
    width: 500px;
    height: 40px;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-between;
    > button {
        width: 48%;
        height: 100%;
        outline: none;
        font-size: 20px;
        font-family: "Noto Sans CJK KR";
        border: none;
        background-color: #4a55b5;
        color: #ffffff;
    }
    > a {
        width: 48%;
        height: 100%;
        text-decoration: none;
        color: black;
        background-color: white;
        border: 1px solid #707070;
        color: #848484;
        outline: none;
        font-size: 20px;
        font-family: "Noto Sans CJK KR";
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
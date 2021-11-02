import styled from "styled-components";

interface StylesProps {
    color? : string;
    backGroundColor? : string;
} 
export const LoginModalWrapper = styled.section`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.35);
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Modal = styled.div`
    width: 450px;
    border-radius: 30px;
    background-color: #e4e4e4;
    display: flex;
    flex-direction: column;
`

export const CloseImg = styled.img`
    width: 11px;
    height: 11px;
    margin-left: auto;
    margin-right: 28.6px;
    padding-top: 25.5px;
`
export const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 auto;
`
export const ModalTitle = styled.h2`
    margin: 20px auto 0 auto;
    margin-top: 20px;
    font-size: 25px;
    font-weight: normal;
    font-family: "Noto Sans CJK KR";
`
export const Login = styled.h1`
    margin: 14px auto 0 auto;
    font-size: 40px;
    font-family: "Noto Sans CJK KR";
    font-weight: bold;
`
export const InputWrapper = styled.label`
    width: 360px;
    height: 74px;
    font-size: 20px;
    border: 1px solid black;
    display: flex;
    margin: 35px auto 0 auto;
`
export const Input = styled.input`
    padding-left: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: none;
`
export const SaveID = styled.label`
    width: 80%;
    display: flex;
    align-items: center;
    margin: 20px auto 0 auto;
    > p {
        margin-left: 8px;
    }
`
export const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    margin: 0;
`
export const ButtonWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 74px;
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 70px;
`
export const Button = styled.button`
    border: none;
    outline: none;
    width: 48%;
    height: 100%;
    font-family: "Noto Sans CJK KR";
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props:StylesProps)=>props.color || 'black'};
    text-decoration: none;
    background-color: ${(props:StylesProps)=>props.backGroundColor || '#ffffff'};
`
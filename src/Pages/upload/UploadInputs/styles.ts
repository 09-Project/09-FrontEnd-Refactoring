import styled from "styled-components";

interface PropsType {
    width? : number;
    heigth? : number;
}

export const UploadInputWrapper = styled.div`
    padding: 60px 0 60px 36px;
    height: auto;
    border-bottom: 1px solid #707070;
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
`

export const Title = styled.p`
    height: 100%;
    width: 67px;
    margin-top: 40px;
    margin-right: 60px;
`
export const Input = styled.input`
    width: ${(props:PropsType)=>props.width || 800}px;
    box-sizing: border-box;
    font-size: 14px;
    color: black;
    padding: 20px 0 20px 12px;
`
export const TextareaWrapper = styled.div`
    height: 220px;
    margin-top: 50px;
    display: flex;
    align-items: center;
`

export const Textarea = styled.textarea`
    height: 100%;
    width: 800px;
    box-sizing: border-box;
    font-size: 14px;
    color: black;
    padding: 20px 0 20px 12px;
`
export const Detail = styled.p`
    height: 100%;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const ButtonWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    height: 64px;
    margin-top: 60px;
`

export const SubmitButton = styled.button`
    width: 200px;
    height: 100%;
    background-color: #4a55b5;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    border: none;
`
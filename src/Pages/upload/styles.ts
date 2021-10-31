import styled from "styled-components";

interface StyleProps {
}

export const UploadPageWrapper = styled.section`
    width: 1150px;
    margin: 0 auto 160px auto;
`
export const TitleWrapper = styled.div`
        display: flex;
    padding: 55px 0 55px 37px;
    border-bottom: 2px solid #707070;
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
`
export const summary = styled.p`
    margin-left: 23px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 5px;
    font-size: 12px;
`
export const SelectTypeWrapper = styled.section`
    display: flex;
    padding: 44px 0 44px 41px;
    border-bottom: 1px solid #707070;
`
export const SelectType = styled.label`
    display: flex;
    margin-right: 33px;
`
export const CheckboxWrapper = styled.div`
    margin-right: 8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #707070;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Checkbox = styled.input`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    vertical-align: middle;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    :checked{
        background-color: #4a55b5;
    }
`
export const UploadImgWrapper = styled.section`
    display: flex;
    padding: 60px 0 60px 37px;
    border-bottom: 1px solid #707070;
`
export const ImgCount = styled.div`
    font-size: 16px;
    padding-right: 20px;
`
export const Imgs = styled.div`
    display: flex;
    flex-direction: column;
    > p{
        margin-top: 20px;
        margin-left: 16px;
    }
`
export const InputImg = styled.label`
    width: 240px;
    height: 240px;
    background-color: #9a9a9a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 16px;
    >input{
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
`
import styled from "styled-components";

export const InputsWrapper = styled.section`
    width: 650px;    
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const InputDiv = styled.div`
    display: flex;
    height: 44px;
    align-items: center;
`
export const InputLabel = styled.label`
    width: 75%;
    padding-left: 10px;
    margin-left: auto;
    border: 1px solid black;
    display: flex;
    border-radius: 2px;
    height: 100%;
    > input {
        width: 90%;
        border: none;
        padding-left: 10px;
        outline: none;
        height: 100%;
        background-color: transparent;
    }
    > label {
        display: flex;
        align-items: center;
    }
`
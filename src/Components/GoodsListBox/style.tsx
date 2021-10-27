import styled from "styled-components";

export const GoodsListBoxWrapper = styled.section`
    width: 1150px;
    margin: 0 auto;
`

export const Title = styled.div`
    margin: 54px 0 36px 30px;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
`

export const ListBox = styled.div`
    width: 100%;
    background-color: rgba(154, 154, 154, 0.2);
    margin: 0 auto;
    padding: 45px 27px 6px 70px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
`

export const ChangePageBtn = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border: 1px solid #4a55b5;
`

export const SelectBtn = styled(ChangePageBtn)`
    color:white;
    background-color: #4a55b5;
`

export const ArrowBtn = styled(ChangePageBtn)`
    background-color: white;
    color: #4a55b5;
`

export const ChangePageBtns = styled.div`
    width: 520px;    
    height: 40px;
    color: #4a55b5;
    margin: 100px auto 0 auto;
    display: flex;
    justify-content: space-between;
` 
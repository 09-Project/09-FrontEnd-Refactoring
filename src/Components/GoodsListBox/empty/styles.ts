import styled from "styled-components";

export const EmptyWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const NotFount = styled.div`
    margin: 98px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p{
        font-family: 'Noto Sans CJK KR';
        font-size: 24px;
        margin-top:8px;
        font-weight: normal;
        line-height: 35px;
    }
`
export const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid #BDBDBD;
`

export const Introduce = styled.div`
    margin: 97px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        font-size: 16px;
        font-family: 'Noto Sans CJK KR';
        font-weight: inherit;
        line-height: 24px;
    }
    margin-bottom: 335px;
`
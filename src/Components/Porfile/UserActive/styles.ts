import styled from "styled-components";

interface StyleProps {
    isMyPage? : boolean;
}

export const UserActiveWrapper = styled.section`
    margin-top: 98px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ActiveTypes = styled.section`
    display: flex;
    border-bottom: 1px solid #707070;
    width: 100%;
`
export const TypeWrapper = styled.ul`
    width: ${(Props:StyleProps)=> Props.isMyPage ? "300" : "200"}px;
    display: flex;
    justify-content: space-between;
`
export const EachType = styled.li`
    width: 100px;
    display: flex;
    justify-content: center;
    padding-bottom: 24px;
    position: relative;
`

export const SelectedType = styled.div`
    border-bottom: 4px solid #4a55b5;
    position: absolute;
    width: 100px;
    top: 46.5px;
    left: 0;
`
export const GoodsList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 35px;
`
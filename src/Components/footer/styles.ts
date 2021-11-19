import styled from "styled-components";

export const FooterWrapper = styled.section`
    width: 100%;
    background-color: rgba(0,0,0,0.1);
`
export const Developers = styled.div`
    width: 100%;
    border-bottom: 1px solid #bdbdbd;
    >div{
        width: 1150px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        text-align: center;
        padding: 25px 0 38px 0;
    }
`
export const EachDeveloper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 50px
;
`
export const DevelopType = styled.p`
    margin: 0;
    font-size: 20px;
    font-family: "Noto Sans CJK KR";
`
export const DeveloperName = styled.p`
    margin: 25px 0 0 0;
    font-size: 20px;
    font-family: "Noto Sans CJK KR";
    text-align: center;
`
export const ProjectInfoWrapper = styled.section`
    height: 50px;
    width: 750px;
    display: flex;
    margin: 0 auto;
    padding: 34px 0 32px 0;
`
export const SiteName = styled.p`
    font-family: "Noto Sans CJK KR";
    font-size: 36px;
`
export const ProjectName = styled.p`
    margin-top: 25px;
    margin-left: 37px;
`
export const Logo = styled.img`
    margin-left: auto;
`
import styled from "styled-components";
interface Styles {
    img : any;
    isMain? : boolean;
    margin? : number;
}
export const HeaderBottomWrapper = styled.section`
    width: 100%;
    height: 100px;
    border-top: 1px solid #bdbdbd;
    display: flex;
    align-items: center;
    > div {
        width: 1150px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #bdbdbd;
    }
`
export const HeaderLogoNSearch = styled.section`
    margin-left: 37px;
    display: flex;
    height: 50px;
    align-items: center;
`
export const LogoNSymbol = styled.div`
    display: flex;
`
export const Logo = styled.div`
    width: ${(props:Styles) => props.isMain ? '66' : '44'}px;
    height: 44px;
    margin-right: ${(props:Styles)=>props.margin}px;
    background-image: url(${(props:Styles)=>props.img});
    background-repeat: no-repeat;
    background-size: contain;
`
export const SearchBox = styled.label`
    width: 400px;
    height: 50px;
    border: 1px solid #707070;
    display: flex;
    align-items: center;
    margin-left: 72px;
    > input {
        width: 350px;
        height: 100%;
        padding: 15px 0 13px 24px;
        font-size: 16px;
        box-sizing: border-box;
        border: none;
        outline: none;
        background-color: transparent;
    }
`

export const NavWrapper = styled.section`
    display: flex;
    align-items: center;
    margin-right: 32px;
`

export const NavA = styled.a`
    text-decoration: none;
    color: black;
    > li {
        display: flex;
        align-items: center;
        padding: 0 15px;
        > p{
            margin-left: 8px;
            font-size: 14px;
        }
    }
`
export const Line = styled.div`
    border-left: 1px solid #707070;
    height: 20px;
`
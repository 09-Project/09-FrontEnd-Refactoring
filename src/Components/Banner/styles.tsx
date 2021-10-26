import styled from "styled-components";

interface Styles {
    isLarge? : boolean;
    img : any;
}
export const BannerWrapper = styled.section`
    width: ${(props:Styles) => props.isLarge ? '1150' : '332'}px;
    height: ${(props:Styles)=> props.isLarge ? '270' : '250'}px;
    margin: ${(props:Styles)=> props.isLarge ? "0 auto" : ''};
    background-image: url(${(props:Styles)=>props.img});
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 auto;
`
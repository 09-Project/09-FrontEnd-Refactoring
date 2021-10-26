import "styled-components";

declare module "styled-commponents" {
    export interface DefaultTheme {
        basicWidht : string;
        color : {
            main : string;
            sub : string
        }
    }
}
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyle = createGlobalStyle`
${reset}

    a{
        text-decoration:none;
        color:inherit
    }
    *{
        box-sizing:border-box;
    }
    body{
        ::-webkit-scrollbar {
            display: none;
        }
    
    }
    button{
        background: none;
        cursor: pointer;
        border:none;
    }
`;

export default Globalstyle;

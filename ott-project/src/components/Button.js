import styled from "styled-components";

function Button({text}) {
    return (
        <RedButton text={text}>{text}</RedButton>
    )
}

export default Button;

// styled-components
const RedButton = styled.button`
        width: 16.3vw;
        height: 9.3vh;

        line-height: 9.3vh;
    
        border-radius: 4vw;
        box-shadow: inset 0 0.3vh 0.4vw 0.2vw rgba(0, 0, 0, 0.5);
        border: solid 0.07vw #000;
        background-color: #981217;
    
        text-shadow: 0 0.3vw 0.6vh rgba(0, 0, 0, 0.25);
        font-size: 2vw;
        font-weight: 900;
        text-align: center;
        color: #fff;
    
        cursor: pointer;
    `;
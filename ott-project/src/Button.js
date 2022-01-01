import styled from "styled-components";

function Button(props) {
    return (
        <RedButton>{props.text}</RedButton>
    )
}

export default Button;

// styled-components
const RedButton = styled.button`
        width: 250px;
        height: 70px;
    
        border-radius: 60px;
        box-shadow: inset 0 2px 5px 3px rgba(0, 0, 0, 0.5);
        border: solid 1px #000;
        background-color: #981217;
    
        margin: 90px auto 0;
        padding: 15px 10px;
    
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 30px;
        font-weight: 900;
        text-align: center;
        color: #fff;
    
        cursor: pointer;
    `;
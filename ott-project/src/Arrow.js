import styled, { keyframes } from 'styled-components';

function Arrow({direction}) {
    return (
        <ScrollArrow direction={direction} />
    )
}


export default Arrow;


const Uparrow = keyframes`
    0% {
    opacity: 0;
    }
    50% {
    opacity: 1;
    }
    100% {
    opacity: 0;
    margin-top: -10px;
    }
`;

const Downarrow = keyframes`
    0% {
    opacity: 0;
    }
    50% {
    opacity: 1;
    }
    100% {
    opacity: 0;
    margin-top: 10px;
    }
`;

const ScrollArrow = styled.div`
    position: relative;

    height: 50px;
    margin-top: 30px;

    &::before {
        content: "";

        position: absolute;
        left: 48vw;

        width: 50px;
        height: 50px;

        border-top: 5px solid white;
        border-right: 5px solid white;

        transform: rotate(${props => props.direction === "up" ? "-45deg" : "135deg"});

        animation: ${props => props.direction === "up" ? Uparrow: Downarrow} 1.5s ease-out infinite;
    }
`;
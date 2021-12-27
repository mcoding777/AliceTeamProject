import styled, { keyframes } from 'styled-components';

const ScrollArrow = styled.div`
    position: relative;

    margin-top: 70px;

    &::before {
        content: "";

        position: absolute;
        left: 48vw;

        width: 50px;
        height: 50px;

        border-top: 5px solid white;
        border-right: 5px solid white;

        transform: rotate(135deg);

        animation: ${props => props.direction} 1.5s ease-out infinite;
    }
`;

const downarrow = keyframes`
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

const uparrow = keyframes`
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

function Arrow(props) {

    return (
        <ScrollArrow direction={props.direction} />
    )
}

export default Arrow;
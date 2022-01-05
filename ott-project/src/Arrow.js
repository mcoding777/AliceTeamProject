import styled, { keyframes } from 'styled-components';

function Arrow({direction}) {

    function UpScroll() {
        if (direction === "up") {
            window.scrollTo( 0, 0 );
        }
    }

    return (
        <ScrollArrow direction={direction} onClick={UpScroll} />
    )
}


export default Arrow;

// styled-components
const Uparrow = keyframes`
    0% {
    opacity: 0;
    }
    50% {
    opacity: 1;
    }
    100% {
    opacity: 0;
    margin-top: -1.4vh;
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
    margin-top: 1.4vh;
    }
`;

const ScrollArrow = styled.div`
    position: relative;

    height: 6.7vh;
    margin-top: ${props => props.direction === "up" ? 6.7 : 2.7}vh;
    margin-right: 3.3vw;

    &::before {
        content: "";

        position: absolute;

        width: 3.3vw;
        height: 6.7vh;

        border-top: 0.3vw solid white;
        border-right: 0.3vw solid white;

        transform: rotate(${props => props.direction === "up" ? "-45deg" : "135deg"});

        animation: ${props => props.direction === "up" ? Uparrow: Downarrow} 1.5s ease-out infinite;
    }
`;
import styled, { keyframes } from 'styled-components';

function Arrow({direction}) {

    const handleScrollMove = () => {

        if (direction === "up") {
            window.scrollTo({top:0, left:0, behavior:'smooth'});
        } else {
            // 현재 스크롤 위치
            const scrollPosition = window.scrollY;

            // console.log(scrollPosition);

            // 스크롤바 이동할 섹션(위치)
            // const section2 = document.getElementById('section2');
            // const section3 = document.getElementById('section3');
    
            // article 요소의 길이
            const elementHeight = document.querySelector('article').scrollHeight;
    
            if (scrollPosition < elementHeight) {
                // section2.scrollIntoView({ behavior: 'smooth' });
                window.scrollTo({top: elementHeight, behavior:'smooth'});
            }
            else {
                // section3.scrollIntoView({ behavior: 'smooth' });
                window.scrollTo({top: elementHeight*2, behavior:'smooth'});
            }

            // downScroll(scrollPosition);
        }
    }

    return (
        <ScrollArrow direction={direction} onClick={() => handleScrollMove()} />
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

    height: 3.3vw;
    
    margin-right: 3.3vw;

    &::before {
        content: "";

        position: absolute;

        width: 3.3vw;
        height: 3.3vw;

        border-top: 0.3vw solid white;
        border-right: 0.3vw solid white;

        transform: rotate(${props => props.direction === "up" ? "-45deg" : "135deg"});

        animation: ${props => props.direction === "up" ? Uparrow: Downarrow} 1.5s ease-out infinite;
    }
`;
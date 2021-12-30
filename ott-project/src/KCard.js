import styled, { keyframes } from 'styled-components';

function KCard() {

    function getTitle(event) {
        const title = event.target.title;
        console.log(title);
    }

    return (
        <>
            <Article>
                <ClassDiv>
                    <div title="A" onClick={getTitle}></div>
                    <div title="B"></div>
                    <div title="C"></div>
                    <div title="D"></div>
                </ClassDiv>
            </Article>
        </>
    )
}

export default KCard;


/* styled-components */
const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Article = styled.article`
    padding: 5vh 70px 6vh 300px;

    box-sizing: border-box;
`;

const ClassDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;

    width: 1200px;
    height: 100%;

    padding: 30px;
    box-sizing: border-box;

    & div {
        width: 500px;
        height: 290px;

        background-color: #DFD3C3;

        border-radius: 30px;

        cursor: pointer;

        animation: ${FadeIn} 0.5s ease-in;
    }
`;



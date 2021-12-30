import styled, { keyframes } from 'styled-components';

function KCard() {

    const img1 = "";
    const img2 = "";
    const img3 = "";
    const img4 = "";

    return (
        <>
            <Article>
                <ClassDivContainer>
                    <ClassDiv title="A">A Class</ClassDiv>
                    <ClassDiv title="B">B Class</ClassDiv>
                    <ClassDiv title="C">C Class</ClassDiv>
                    <ClassDiv title="D">D Class</ClassDiv>
                </ClassDivContainer>
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

const ClassDivContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;

    width: 1200px;
    height: 100%;

    padding: 30px;
    box-sizing: border-box;
`;

const ClassDiv = styled.div`
    width: 500px;
    height: 290px;

    background-color: #DFD3C3;

    border-radius: 30px;

    cursor: pointer;

    animation: ${FadeIn} 0.5s ease-in;

    font-size: 50px;
    color: black;
    text-align: center;
    line-height: 290px; // 부모 요소 높이와 동일하게 하면 가운데 위치됨
`;



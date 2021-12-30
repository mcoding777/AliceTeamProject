import styled, { keyframes } from 'styled-components';

function KCard() {

    return (
        <>
            <Article>
                <ClassDivContainer>
                    <ClassDiv title="A"><span>A Class</span></ClassDiv>
                    <ClassDiv title="B"><span>B Class</span></ClassDiv>
                    <ClassDiv title="C"><span>C Class</span></ClassDiv>
                    <ClassDiv title="D"><span>D Class</span></ClassDiv>
                </ClassDivContainer>
            </Article>
        </>
    )
}

export default KCard;


/* styled-components */

const img1 = "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMTA5MDFfODYg%2FMDAxNjMwNDkxNzgwNzk5.Skcb8LU8_yF5jfzocvTQLga6bimMJQhgAjsoT6bOjuMg.fzOpEXQCz3BT7lEQ1EhwQFuIfxO8ajh1wCyqihyBxpwg.JPEG%2FIfe0SYsWK3RCpqK3HxlsdNyy1FQ4.jpg&type=sc960_832";
const img2 = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MjFfMjgg%2FMDAxNTkwMDM0Nzc2NDUz.tKQtPs0t9Sl39UitHJ-74WGejOvl5NEUMBHoSEZjA-sg.8QI7n2aoeunLcn5GFcgUGfE6z3GqEYVtMYtD_Adq5YAg.JPEG.dnwjs2015%2F%25BD%25BD%25B1%25E2%25B7%25CE%25BF%25EE%25C0%25C7%25BB%25E7%25BB%25FD%25C8%25B0%25B4%25EB%25BA%25BB%252C%25BF%25A9%25C0%25DA%25B5%25E5%25B6%25F3%25B8%25B6%25B5%25B6%25B9%25E9%252C%25BF%25A9%25C0%25DA%25BF%25AC%25B1%25E2%25B4%25EB%25BB%25E7%252C%25B5%25B6%25B9%25E9%25B4%25EB%25BB%25E7.jpg&type=sc960_832";
const img3 = "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F11%2F15%2F0000191606_002_20211115181002794.jpg&type=sc960_832";
const img4 = "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5401%2F2020%2F04%2F24%2F0000203788_001_20200424173638369.jpg&type=sc960_832";

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
    border-radius: 30px;

    cursor: pointer;

    animation: ${FadeIn} 0.5s ease-in;

    font-size: 50px;
    color: black;
    text-align: center;
    line-height: 290px; // 부모 요소 높이와 동일하게 하면 가운데 위치됨

    position: relative;

    &[title="A"] {
        background-image: url(${img1});
    }

    &[title="B"] {
        background-image: url(${img2});
    }

    &[title="C"] {
        background-image: url(${img3});
    }

    &[title="D"] {
        background-image: url(${img4});
    }

    &::before {
        content: "";

        width: 100%;
        height: 100%;
        border-radius: 30px;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        backdrop-filter: blur(4px);

    }

    & span {
        position: absolute;
        z-index: 2;

        transform: translateX(-50%);
    }
`;



import styled, { keyframes } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Article, Contents } from './AreaTag';

function ClassCard() {

    // 선택한 카테고리 정보
    const location = useLocation();
    const navigate = useNavigate();
    const result = location.state;

    console.log("ClassCard에서 선택된 카테고리", result);

    // 선택한 클래스 저장하고 페이지 전환하는 함수
    const handleGetClass = (selectClass) => {
        console.log(`${selectClass}를 클릭했습니다`);
        navigate(`/page/kcontents/${selectClass}`, { state: result });
    }

    return (
        <Contents>
            <Article>
                <ClassDivContainer>
                    <ClassDiv 
                        title="A" 
                        onClick={() => handleGetClass("A")}>
                        <div>
                            <span>
                                A Class <br />
                                <span>
                                    A Class에 있는 컨텐츠는 자체 평가 종합 점수가 <br />
                                    매우 우수한 컨텐츠입니다.
                                </span>
                            </span>
                        </div>
                    </ClassDiv>
                    <ClassDiv 
                        title="B" 
                        onClick={() => handleGetClass("B")}>
                        <div>
                            <span>
                                B Class <br />
                                <span>
                                    B Class에 있는 컨텐츠는 자체 평가 종합 점수가 <br />
                                    우수한 컨텐츠입니다.
                                </span>
                            </span>
                        </div>
                    </ClassDiv>
                    <ClassDiv 
                        title="C" 
                        onClick={() => handleGetClass("C")}>
                        <div>
                            <span>
                                C Class <br />
                                <span>
                                    C Class에 있는 컨텐츠는 자체 평가 종합 점수가 <br />
                                    보통인 컨텐츠입니다.
                                </span>
                            </span>
                        </div>
                    </ClassDiv>
                    <ClassDiv 
                        title="D" 
                        onClick={() => handleGetClass("D")}>
                        <div>
                            <span>
                                D Class <br />
                                <span>
                                    D Class에 있는 컨텐츠는 자체 평가 종합 점수가 <br />
                                    다소 미흡한 컨텐츠입니다.
                                </span>
                            </span>
                        </div>
                    </ClassDiv>
                </ClassDivContainer>
            </Article>
        </Contents>
    )
}

export default ClassCard;

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

const ClassDivContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;

    width: 78.2vw;
    height: 80vh;
`;

const ClassDiv = styled.div`
    width: 32.6vw;
    height: 38.5vh;
    border-radius: 2vw;

    cursor: pointer;

    animation: ${FadeIn} 0.5s ease-in;

    font-size: 3.3vw;
    color: black;
    text-align: center;
    /* line-height: 38.5vh; // 부모 요소 높이와 동일하게 하면 가운데 위치됨 */

    position: relative;

    &[title="A"],
    &[title="B"],
    &[title="C"],
    &[title="D"] {
        background-size: cover;
        background-repeat: no-repeat;
    }

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

    &::after {
        content: "";

        width: 100%;
        height: 100%;
        border-radius: 2vw;

        position: absolute;
        top: 0;
        left: 0;

        backdrop-filter: blur(10px);

    }

    & div {
        display: inline-block;
        margin: auto 0;

        & span {
            position: absolute;
            z-index: 2;

            transform: translateX(-50%);

            & span {
                display: inline-block;

                width: 25vw;
                margin-top: 15%;

                font-size: 1.1vw;
                font-weight: 500;
            }

        }
    }
`;



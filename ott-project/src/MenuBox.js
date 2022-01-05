import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

function MenuBox() {

    const [category, setCategory] = useState(sessionStorage.getItem('category') || "");
    const [review, setReview] = useState(sessionStorage.getItem('review') || "");
    const navigate = useNavigate();

    function getCategoryValue(event) {
        sessionStorage.setItem("category", event.target.value);
        setCategory(event.target.value);
    }

    function getReviewValue(event) {
        sessionStorage.setItem("review", event.target.value);
        setReview(event.target.value);
    }

    // 선택한 항목에 따라 페이지를 바꿔주는 함수
    function getHandleResult() {
        if (category === "" || review === "") {
            alert("선택하지 않은 항목이 있습니다.");
        }
        else if (review === "market") {
        navigate("/page/market", {state: {category:category, review:review}});
            // return <Market category={result.category} />
        }
        else if (review === "k-contents") {
        navigate("/page/kcontents", {state: {category:category, review:review}});
            // return <ClassCard category={result.category} />
        }
    };

    return (
        <>
            <NavBox>
                <MenuText>CATEGORY</MenuText>
                <SelectContainer>
                    <label>
                        <input 
                            type="radio" 
                            name="category" 
                            value="movie" 
                            onClick={getCategoryValue} 
                            defaultChecked={category === "movie"}
                        /> Movie
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="category" 
                            value="tv-series" 
                            onClick={getCategoryValue} 
                            defaultChecked={category === "tv"}
                        /> TV Series
                    </label>
                </SelectContainer> 
                <MenuText>REVIEW</MenuText>
                <SelectContainer>
                    <label>
                        <input 
                            type="radio" 
                            name="review" 
                            value="market" 
                            onClick={getReviewValue} 
                            defaultChecked={review === "market"}
                        /> Market
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="review" 
                            value="k-contents" 
                            onClick={getReviewValue} 
                            defaultChecked={review === "kcontents"}
                        /> K-Contents
                    </label>
                </SelectContainer>
                <TipContainer>
                    CATEGORY는 넷플릭스 컨텐츠를<br />
                    크게 2가지 분류로 나눕니다.<br />
                    Movie : 영화<br />
                    TV Series : TV쇼(드라마)<br />
                    <br />
                    REVIEW는 넷플릭스 시장의 인사이트와<br />
                    한국 컨텐츠의 영향력을<br />
                    다양한 지표로 분석해드립니다.<br />
                    Market : 넷플릭스 시장 현황<br />
                    K-Contents : 한국 컨텐츠 분석
                </TipContainer>
                <ButtonContainer>
                    <button 
                        onClick={getHandleResult}>
                        결과보기
                    </button>
                    <Link to="/">
                        <button>처음으로</button>
                    </Link>
                </ButtonContainer>
            </NavBox>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MenuBox;

// styled-components
const NavBox = styled.nav`
    width: 300px;
    height: 670px;

    position: fixed;
    top: 5vh;
    z-index: 1;

    background-color: #981217;

    padding: 30px;

    color: black;

    display: flex;
    flex-direction: column;
`;

const SelectContainer = styled.div`
    height: 12%;

    line-height: 1.7em;
    background-color: white;

    margin-bottom: 10px;
    padding: 10px 15px;

    & label {
        display: block;

        text-align: left;
    }
`;

const MenuText = styled.p`
    text-align: left;

    font-size: 2em;
    font-weight: bold;

    color: white;
`;

const TipContainer = styled.p`
    margin-top: 30px;

    font-size: 0.85em;
    font-weight: 500;
    line-height: 150%;

    margin-top: 15%;
    margin-bottom: 15%;

    text-align: left;
`;

const ButtonContainer = styled.div`
    width: 100%;

    & button {
        all: unset;

        width: 47%;
        height: 60px;

        background-color: #2D0000;
        color: white;

        font-size: 20px;
        font-weight: bold;

        cursor: pointer;

        &:nth-child(1) {
            margin-right: 5px;
        }
    }
`;
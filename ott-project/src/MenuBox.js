import './css/MenuBox.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
        else if (review === "kcontents") {
        navigate("/page/kcontents", {state: {category:category, review:review}});
            // return <ClassCard category={result.category} />
        }
    };

    return (
        <>
            <nav>
                <div className='menubox'>
                    <p>CATEGORY</p>
                    <div>
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
                                value="tv" 
                                onClick={getCategoryValue} 
                                defaultChecked={category === "tv"}
                            /> TV Series
                        </label>
                    </div> 
                    <p>REVIEW</p>
                    <div>
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
                                value="kcontents" 
                                onClick={getReviewValue} 
                                defaultChecked={review === "kcontents"}
                            /> K-Contents
                        </label>
                    </div>
                    <p className='tip'>
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
                    </p>
                    <button 
                        style={{marginRight:"10px"}}
                        onClick={getHandleResult} 
                    >결과보기</button>
                    <Link to="/" style={{color: "white"}}>
                        <button>처음으로</button>
                    </Link>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MenuBox;
import './css/MenuBox.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MenuBox(props) {

    const [category, setCategory] = useState(sessionStorage.getItem('category') || "");
    const [review, setReview] = useState(sessionStorage.getItem('review') || "");

    function getCategoryValue(event) {
        sessionStorage.setItem("category", event.target.value);
        setCategory(event.target.value);
    }

    function getReviewValue(event) {
        sessionStorage.setItem("review", event.target.value);
        setReview(event.target.value);
    }

    function getHandleResult() {
        if (category === "" || review === "") {
            alert("선택하지 않은 항목이 있습니다.");
            props.result("", "");
        }
        else {
            props.result(category, review);
        }
    }

    return (
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
    )
}

export default MenuBox;
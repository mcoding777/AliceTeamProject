import './css/MenuBox.css';
import { Link } from 'react-router-dom';

function MenuBox(props) {

    function getCategoryValue(event) {
        props.category(event.target.value);
    }

    function getReviewValue(event) {
        props.review(event.target.value);
    }

    return (
        <nav>
            <div className='menubox'>
                <p>CATEGORY</p>
                <div>
                    <label>
                        <input type="radio" name="category" value="movie" onClick={getCategoryValue} /> Movie
                    </label>
                    <label>
                        <input type="radio" name="category" value="tv" onClick={getCategoryValue} /> TV Series
                    </label>
                </div> 
                <p>REVIEW</p>
                <div>
                    <label>
                        <input type="radio" name="review" value="market" onClick={getReviewValue} /> Market
                    </label>
                    <label>
                        <input type="radio" name="review" value="kcontents" onClick={getReviewValue} /> K-Contents
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
                <Link to="/" style={{color: "white"}}>
                    <button>처음으로</button>
                </Link>
            </div>
        </nav>
    )
}

export default MenuBox;
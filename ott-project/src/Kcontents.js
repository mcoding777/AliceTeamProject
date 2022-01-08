import Arrow from './components/Arrow';
import { Article, Contents } from './components/AreaTag';
import Text from './components/Text';
import Button from './components/Button.js';
import Loading from './components/Loading';
import PosterSlider from './data/PosterSlider';
import { TotalChart } from './data/DataChart';
import WordCloud from './data/WordCloud';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Kcontents() {

    // 선택한 카테고리, 클래스 정보
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state.category;
    const selectClass = location.pathname.slice(-1);

    // API 요청해서 받은 데이터
    const [totalData, setTotalData] = useState({});
    const [loading, setLoading] = useState(true);

    // 별표 및 종합차트 데이터
    const score = Math.round(Number(totalData.score));
    const award = Math.round(Number(totalData.award));
    const global = Math.round(Number(totalData.global));
    const popularity = Math.round(Number(totalData.popularity));

    // 포스터 데이터
    const [poster, setPoster] = useState([]);
    const [imdb, setImdb] = useState([]);

    // 종합지수(문구) 데이터
    const totalScore = Math.round(totalData.total_score);
    const totalScoreRender = getScoreRender();
    const totalPercent = Math.round(totalData.class_numbers / totalData.category_numbers * 100);
    const totalContents = totalData.class_numbers;

    // 워드클라우드 데이터
    const wordCloudTexts = totalData.text_list;
    const wordCloudValues = totalData.value_list;

    // API 오류 뜰 때 사용할 더미 데이터
    // const dummyRelease = {
    //     "2015": 400,
    //     "2016": 500,
    //     "2017": 400,
    //     "2018": 300,
    //     "2019": 450,
    //     "2020": 350
    // }
    // const dummyGenre = {
    //     "Action": 25,
    //     "Drama": 30,
    //     "Comedy": 35,
    //     "Crime": 20,
    //     "Fantasy": 10,
    //     "Etc": 5
    // }

    const getTotal = async () => {
        const APIclass = `${category === "movie" ? "Movie" : "Series"}` + selectClass;
        const APItotal = await fetch(
            `https://www.sebaschan.shop/${category}/k-contents/{class}?class=${APIclass}`);
        const APIjson = await APItotal.json();
        setTotalData(APIjson);
        // setLoading(false); 
    }

    function getScoreRender() {
        if (totalScore >= 4) {
            return ( "4점 이상으로" )
        } else if (totalScore < 4 && totalScore >= 3) {
            return ( "4점 미만 3점 이상으로" ) 
        } else if (totalScore < 3 && totalScore >= 2) {
            return ( "3점 미만 2점 이상으로" )
        } else {
            return ( "2점 미만으로" )
        }
    }

    const handlePrevPage = () => {
        navigate(-1, {state: {category:category}});
    }

    // 이 페이지가 렌더링 될 때 스크롤바는 항상 최상단으로 이동
    // location으로 받은 항목이 달라지면 종합 데이터도 다시 받아오기
    useEffect(() => { 
        window.scrollTo({top:0, behavior:'smooth'});
        getTotal(); }, [category, selectClass]);

    // totalData가 바뀌면 포스터와 imdb 주소도 다시 받아오기
    useEffect(() => { 
        setPoster(totalData.poster);
        setImdb(totalData.imdb); 
    }, [totalData]);

    // 로딩중 페이지 1초 지연
    useEffect(() => { 
        const timer = setTimeout(() => { setLoading(false); }, 3000);
        return (() => { clearTimeout(timer); })
    }, []);

    return (
        <Contents>
            { loading ? 
                <Article>
                    <Loading />
                </Article>
            :
                <>
                    <Article>
                        <PosterSlider poster={poster} imdb={imdb} />
                        <TotalText>
                            {selectClass} class 는 종합평점 {totalScoreRender} 전체 컨텐츠중 {totalPercent}% 비중으로 {totalContents}개의 컨텐츠가 있습니다.
                        </TotalText>
                        <ScoreContainer>
                            <StarDiv>
                                <p>
                                    SCORE 
                                    <span>
                                        {"★".repeat(score)}
                                    </span>
                                </p>
                                <p>
                                    AWARD 
                                    <span>
                                        {"★".repeat(award)}
                                    </span>
                                </p>
                                <p>
                                    GLOBAL 
                                    <span>
                                        {"★".repeat(global)}
                                    </span>
                                </p>
                                <p>
                                    POPULARITY 
                                    <span>
                                        {"★".repeat(popularity)}
                                    </span>
                                </p>
                            </StarDiv>
                            <TotalChart 
                                score={score} 
                                award={award} 
                                global={global} 
                                popularity={popularity} />
                        </ScoreContainer>
                        <Arrow />
                    </Article>
                    <Article>
                        <Text>
                            {selectClass} class 컨텐츠의 줄거리에서 많이 나온 단어를 확인해보세요!
                        </Text>
                        <WordCloud texts={wordCloudTexts} values={wordCloudValues} />
                        <PrevPage onClick={() => handlePrevPage()}>
                            <Button text="뒤로가기" />
                        </PrevPage>
                        <Arrow direction="up" />
                    </Article>
                </>
            }
        </Contents>
    )
}

export default Kcontents;

// styled-components
const TotalText = styled.p`
    font-size: 1.6vw;
    font-weight: bold;
`;

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 65.1vw;

    margin-top: 5.5vh;
    margin-bottom: 1vh;
`;

const StarDiv = styled.div`
    width: 50%;

    & p {
        background-color: #363636;

        font-size: 2vw;
        font-weight: bold;

        width: 90%;
        height: 8vh;

        padding: 1vh 2vw;

        box-sizing: border-box;
        text-align: left;

        display: flex;
        justify-content: space-between;

        
        &:nth-child(2),
        :nth-child(3) {
            margin: 1.4vh 0;
        }

        & span {
            color: yellow;
        }
    }
`;

const PrevPage = styled.div`
    align-self: end;
    margin-right: 5vw;
`;
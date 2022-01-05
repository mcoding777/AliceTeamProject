import Arrow from './Arrow';
import { Article, Contents } from './AreaTag';
import Text from './Text';
import WordCloud from './WordCloud';
import {
    Chart as ChartJS,
    CategoryScale,
    RadialLinearScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import word_cloud from './image/word_cloud.jpg';
import styled from 'styled-components';

function Kcontents() {

    // 선택한 카테고리, 클래스 정보
    const location = useLocation();
    const category = location.state.category;
    const selectClass = location.pathname.slice(-1);

    // API 요청해서 받은 데이터
    const [totalData, setTotalData] = useState({});
    const [loading, setLoading] = useState(false);

    // 별표 및 종합차트 데이터
    const score = Math.floor(Number(totalData.score));
    const award = Math.floor(Number(totalData.award));
    const global = Math.floor(Number(totalData.global));
    const popularity = Math.floor(Number(totalData.popularity));

    // 포스터 데이터
    const poster = totalData.poster;
    const imdb = totalData.imdb;

    // 종합지수(문구) 데이터
    const totalScore = Math.floor(totalData.total_score);
    const totalPercent = Math.floor(totalData.class_numbers / totalData.total_numbers * 100);
    const totalContents = totalData.class_numbers;

    // console.log(poster);

    // API 오류 뜰 때 사용할 더미 데이터
    const dummyRelease = {
        "2015": 400,
        "2016": 500,
        "2017": 400,
        "2018": 300,
        "2019": 450,
        "2020": 350
    }
    const dummyGenre = {
        "Action": 25,
        "Drama": 30,
        "Comedy": 35,
        "Crime": 20,
        "Fantasy": 10,
        "Etc": 5
    }

    const getTotal = async () => {
        const APIclass = `${category === "movie" ? "Movie" : "Series"}` + selectClass;
        const APItotal = await fetch(
            `https://www.sebaschan.shop/${category}/k-contents/{class}?class=${APIclass}`);
        const APIjson = await APItotal.json();
        setTotalData(APIjson);
    }

    // 이 페이지가 렌더링 될 때 스크롤바는 항상 최상단으로 이동
    useEffect(() => { window.scrollTo(0, 0); }, []);
    // location으로 받은 항목이 달라지면 종합 데이터도 다시 받아오기
    useEffect(() => { getTotal(); }, [category, selectClass]);

    return (
        <Contents>
            <Article>
                <PosterDiv>
                    {poster && poster.map((item, index) => {
                        return (
                            <img src={item} 
                                alt={"이미지" + index} 
                                onClick={
                                    () => { window.open(imdb[index], '_blank'); }
                                } 
                            />)
                        })
                    }
                </PosterDiv>
                <TotalText>
                    {selectClass} class 는 종합평점 {totalScore}점이상으로 전체 컨텐츠중 {totalPercent}% 비중으로 {totalContents}개의 컨텐츠가 있습니다.
                </TotalText>
                <ScoreContainer>
                    <StarDiv>
                        <p>SCORE <span>{"★".repeat(score)}</span></p>
                        <p>AWARD <span>{"★".repeat(award)}</span></p>
                        <p>GLOBAL <span>{"★".repeat(global)}</span></p>
                        <p>POPULARITY <span>{"★".repeat(popularity)}</span></p>
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
                    A class 컨텐츠의 줄거리에서 많이 나온 단어를 확인해보세요!
                </Text>
                <WordCloud />
            </Article>
        </Contents>
    )
}

export default Kcontents;

// 차트
ChartJS.register(
    CategoryScale,
    RadialLinearScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

function TotalChart({score, award, global, popularity}) {

    const data = {
      labels: ['SCORE', 'AWARD', 'GLOBAL', 'POPULARITY'],
      datasets: [
        {
          label: '종합지표',
          borderColor: '#8E0505',
          borderWidth: 2,
          backgroundColor: 'rgba(142, 5, 5, 0.2)',
          data: [score, award, global, popularity],
        },
      ],
    };

    const options = {
        maintainAspectRatio: false, // 가로 세로 비율 고정을 어떻게 할 것인가?
        scales: {
            r: { // 좌표값
              beginAtZero: true, // 0부터 시작할까?
              max: 5,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    }
  
    return (
        <TotalChartDiv>
            <Radar data={data} options={options} />
        </TotalChartDiv>
    )
  }

// styled-components
const PosterDiv = styled.div`
    display: flex;
    justify-content: space-between;

    width: 58.6vw;
    height: 20vh;

    margin: 6.7vh 0;
`;

const TotalText = styled.p`
    font-size: 1.7vw;
    font-weight: bold;
`;

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 65.1vw;

    margin-top: 6.7vh;
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

const TotalChartDiv = styled.div`
    width: 30.6vw;
    height: 35.9vh;
  
    padding: 1.4vh 0.7vw;
  
    background-color: white;
`;
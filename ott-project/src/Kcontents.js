import Arrow from './Arrow';
import {
    Chart as ChartJS,
    CategoryScale,
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

    const location = useLocation();
    const category = location.state.category;
    const selectClass = location.pathname.slice(-1);

    const [totalData, setTotalData] = useState({});
    const score = Math.floor(Number(totalData.score));
    const award = Math.floor(Number(totalData.award));
    const global = Math.floor(Number(totalData.global));
    const popularity = Math.floor(Number(totalData.popularity));
    const poster = totalData.poster;

    console.log(score, award, global, popularity);

    const getTotal = async () => {
        const APIclass = `${category === "movie" ? "Movie" : "Series"}` + selectClass;
        const total = await fetch(
            `http://13.58.124.132/${category}/k-contents/{class}?class=${APIclass}`);
        const total_json = await total.json();
        setTotalData({...total_json});
    }

    // 이 페이지가 렌더링 될 때 스크롤바는 항상 최상단으로 이동
    useEffect(() => { window.scrollTo(0, 0); }, []);
    // location으로 받은 항목이 달라지면 종합 데이터도 다시 받아오기
    useEffect(() => { getTotal(); }, [category, selectClass]);

    return (
        <>
            <main>
                <article>
                    <div className='divContainer'>
                        <DivContainer>
                            <PosterDiv>
                                <img src={poster[0]} alt="오징어게임" />
                                <img src={poster[1]} alt="슬기로운의사생활" />
                                <img src={poster[2]} alt="지옥" />
                                <img src={poster[3]} alt="연애의참견" />
                                <img src={poster[4]} alt="고요의바다" />
                            </PosterDiv>
                            <TotalP>
                                A class 는 종합평점 4점이상으로 전체 컨텐츠중 1% 비중으로 7개의 컨텐츠가 있습니다.
                            </TotalP>
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
                        </DivContainer>
                    </div>
                    <Arrow />
                </article>
                <article>
                    <div className='divContainer'>
                        <WordCloudP>
                            A class 컨텐츠의 줄거리에서 많이 나온 단어를 확인해보세요!
                        </WordCloudP>
                        <img src={word_cloud} alt="워드클라우드" />
                    </div>
                </article>
            </main>
        </>
    )
}

export default Kcontents;

// 차트
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
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
    width: 700px;
    height: 180px;

    display: flex;
    justify-content: space-between;

    margin: 0 auto;
`;

const DivContainer = styled.div`
    width: 1200px;
    height: 570px;
`;

const TotalP = styled.p`
    font-size: 25px;
    font-weight: bold;

    margin: 50px auto;
`;

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 1000px;
    margin: auto;
`;

const StarDiv = styled.div`
    width: 50%;

    & p {
        background-color: #363636;

        font-size: 30px;
        font-weight: bold;

        width: 90%;
        height: 60px;

        padding: 7px 30px 0 30px;

        box-sizing: border-box;
        text-align: left;

        display: flex;
        justify-content: space-between;

        
        &:nth-child(2),
        :nth-child(3) {
            margin: 10px 0;
        }

        & span {
            color: yellow;
        }
    }
`;

const TotalChartDiv = styled.div`
    width: 470px;
    height: 250px;
  
    padding: 10px;
  
    background-color: white;
`;

const WordCloudP = styled.p`
    font-size: 30px;

    text-align: left;
    margin: 0 0 30px 100px;
`;
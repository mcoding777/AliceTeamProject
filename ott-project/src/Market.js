import Arrow from './Arrow';
import { Article, Contents } from './AreaTag';
import Text from './Text';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styled from 'styled-components';

function Market() {

    // 선택한 카테고리와 리뷰 정보
    const location = useLocation();
    const category = location.state.category;

    // API 요청해서 받은 데이터
    const [releaseData, setReleaseData] = useState({});
    const [genreData, setGenreData] = useState({});
    const [loading, setLoading] = useState(false);

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

    // console.log(genreData);

    const getRelease = async () => {
        const APIrelease = await fetch(`https://www.sebaschan.shop/${category}/market`);
        const APIjson = await APIrelease.json();
        if (category === "movie") {
            setReleaseData(APIjson.movie_num);
            setGenreData(APIjson.genre_percent);
            setLoading(true);
        }
        else {
            setReleaseData(APIjson.tvseries_num);
            setGenreData(APIjson.genre_percent);
            setLoading(true);
        }
    }

    // 이 페이지가 렌더링 될 때 스크롤바는 항상 최상단으로 이동
    useEffect(() => { window.scrollTo(0, 0); }, []);
    // location으로 받은 항목이 달라지면 차트 데이터도 다시 받아오기
    useEffect(() => { getRelease() }, [category]);

    return (
        <Contents>
            <Article>
                <Text>매년 넷플릭스에 릴리즈되는 한국 컨텐츠는 이렇습니다.</Text>
                <ReleaseChart releaseData={loading ? releaseData : dummyRelease} />
                <Arrow direction="down" />
            </Article>
            <Article>
                <Text>넷플릭스 한국 컨텐츠의 장르 분포도를 확인해보세요.</Text>
                <GenreChart genreData={loading ? genreData : dummyGenre} />
                <Arrow direction="up" />
            </Article>
        </Contents>
    )
}

export default Market;

// 차트
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  );
  
function ReleaseChart({releaseData}) {

    const data = {
        labels: Object.keys(releaseData),
        datasets: [
            {
            label: '릴리즈되는 한국 컨텐츠 수',
            borderColor: '#1A374D',
            borderWidth: 5,
            backgroundColor: '#6998AB',
            data: Object.values(releaseData),
            },
        ],
    };
  
    return (
        <ReleaseChartDiv>
            <Bar data={data} />
        </ReleaseChartDiv>
    )
  }

function GenreChart({genreData}) {

    const data = {
        labels: Object.keys(genreData),
        datasets: [
            {
            label: "장르 분포도",
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: [
                "#FF5959",
                "#3D087B",
                "#F43B86",
                "#FFE459",
                "#3E8E7E",
                "#9AE66E"
            ],
            data: (Object.values(genreData)).map((item) => { 
                return Math.floor(item) }),
            },
        ],
    };

    const options = {
        maintainAspectRatio: false, // 가로 세로 비율 고정을 어떻게 할 것인가?
        plugins: {
            datalabels: {
                backgroundColor: "#2D0000",
                borderRadius: 5,
                padding: 10,
                color: 'white',
                textAlign: 'center',
                formatter: (value, ctx) => {
                    let index = ctx.dataIndex;
                    let label = ctx.chart.data.labels[index];
                    return label + '\n' + value + '%';
                },
                display: (context) => {
                    let index = context.dataIndex;
                    let value = context.dataset.data[index];
                    return value > 0 ? true : false;
                },
            },
            legend: {
                position: 'right',
                labels: {
                    padding: 30, // 범례 사이 간격 : 상하는 조절할 수 없다!
                    usePointStyle: true,
                    font: {
                        size: 20,
                    },
                    color: "white",
                },
            },
        },
    }

    return (
        <GenreChartDiv>
            <Doughnut 
                data={data} 
                options={options} 
                plugins={[ChartDataLabels]} 
            />
        </GenreChartDiv>
    )
}

// styled-components
const ReleaseChartDiv = styled.div`
    background-color: white;

    width: 700px;

    margin-top: 50px;
    padding: 50px;
`;

const GenreChartDiv = styled.div`
    width: 600px;
    height: 440px;
  
    margin-top: 50px;
`;
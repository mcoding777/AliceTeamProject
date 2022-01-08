import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
    RadialLinearScale,
  } from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styled from 'styled-components';

// 차트 플러그인
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
  );

// 코로나 차트
export function CovidChart({coronas}) {

    ChartJS.register( LineElement );

    const data = {
        labels: coronas.map(x => x.years),
        datasets: [
            {
            label: '국내 영화관 매출액',
            borderColor: '#F05454',
            borderWidth: 2,
            data: coronas.map(x => x.movie_cost / 100000000),
            tension: 0.5,
            yAxisID: 'y0', // 축 id
            },
            {
            label: '넷플릭스 코리아 매출액',
            borderColor: '#30475E',
            borderWidth: 2,
            data: coronas.map(x => x.ott_cost / 100000000),
            tension: 0.5,
            yAxisID: 'y1',
            },
        ],
        };
        
        const options = {
        scales: { // 축 스타일링
            y0: {   // 축 id별로 스타일링 객체로 넣기
                id: 'y0',
                type: 'linear',
                display: true,
                position: 'left',
                grid: { // 축 기준이 되는 grid 스타일링
                    borderColor: "rgb(255, 99, 132)",
                    },
                title: {
                display: true,
                align: 'center',
                color: 'black',
                font: {
                    size: 12,
                    weight: 300,
                },
                text: '국내 영화관 매출액 (억 달러)',
            },
            },
            y1: {
                id: 'y1',
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    borderColor: "rgb(54, 162, 235)", 
                    },
                title: {
                display: true,
                align: 'center',
                color: 'black',
                font: {
                    size: 12,
                    weight: 300,
                },
                text: '넷플릭스 코리아 매출액 (억 달러)',
            },
            },
        },
        plugins: {
            legend: { // 범례 스타일링
                labels: {
                    usePointStyle: true,
                    // 범례 도형 모양과 관련된 속성으로, false일 경우엔 기본 직사각형 도형으로 
                },
            },
        }
    };

    // 일정 영역만 색칠해주는 플러그인
    const chartAreaPlugin = {
        id: 'chartAreaPlugin',
        beforeDraw(chart, args, options) {
            const { ctx, chartArea : {top, bottom, left, right, width, height} } = chart;
            ctx.save();

            // console.log(left, top, bottom, right, width, height);

            ctx.fillStyle = 'rgba(142, 5, 5, 0.1)';
            // const leftMid = (width / 2) + left // x축 중간 지점
            ctx.fillRect(bottom+(width/4)+(left/2), top, width/4, height);
        }
    };

    return (
        <CoronaDiv>
            <Line type="line" data={data} options={options} plugins={[chartAreaPlugin]} />
        </CoronaDiv>
    )
}

// 릴리즈 차트
export function ReleaseChart({releaseData}) {

    ChartJS.register( BarElement );

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

// 장르 차트
export function GenreChart({genreData}) {

    ChartJS.register( ArcElement );

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

// 종합지수 차트
export function TotalChart({score, award, global, popularity}) {

    ChartJS.register( RadialLinearScale, LineElement );

    console.log(score, award, global, popularity);

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
const CoronaDiv = styled.div`
    width: 45.6vw;

    background-color: white;

    padding: 6.7vh 3.3vw;
`;

const ReleaseChartDiv = styled.div`
    background-color: white;

    width: 45.6vw;

    margin: 6.7vh 0 3vh 0;
    padding: 6.7vh 3.3vw;
`;

const GenreChartDiv = styled.div`
    width: 39vw;
    height: 58.4vh;
  
    margin: 6.7vh 0 6vh 0;
`;

const TotalChartDiv = styled.div`
    width: 30.6vw;
    height: 35.9vh;
  
    padding: 1.4vh 0.7vw;
  
    background-color: white;
`;
import Button from './Button';
import Arrow from './Arrow';
import { Article } from './AreaTag';
import { Link } from 'react-router-dom';
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
import { Line } from 'react-chartjs-2'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// 첫 메인화면 컴포넌트
function Main() {

    useEffect(() => {
        sessionStorage.clear();
    }, [])

    const [coronas, setCoronas] = useState([]);

    const getCorona = async () => {
        const corona = await fetch(`https://www.sebaschan.shop/corona`);
        const corona_json = await corona.json();
        setCoronas(corona_json);
    }

    // console.log(coronas);

    useEffect(() => { getCorona() }, []);

    return (
        <main>
            <Article>
                <Logo 
                    src="./image/netflix-logo.png" 
                    alt="넷플릭스 로고" 
                />
                <TitleStyle>영화 제작사와 투자자 여러분<br />환영합니다</TitleStyle>
                <Link to="/page">
                    <Button text="시작하기" />
                </Link>
                <Arrow direction="down" />
            </Article>
            <Article>
                <Description>
                    2020년 COVID-19로 인해 OTT 플랫폼의 영향력은 더욱 커졌습니다.<br />
                    여러분의 성공적인 영화 제작과 투자를 위해<br />
                    한국 컨텐츠의 영향력을 분석해드립니다.
                </Description>
                <CovidChart coronas={coronas} />
                <Arrow direction="down" />
            </Article>
            <Article>
                <Description>
                    우리 서비스는
                    <Logo 
                        src="./image/netflix-logo.png" 
                        alt="넷플릭스 로고" 
                        position="description" 
                    />
                    한국 컨텐츠를 기준으로 분석합니다.<br />
                    각 나라에서 흥행하는 한국 컨텐츠를 바탕으로<br />
                    효율적인 벤치마킹을 경험해보십시오.
                </Description>
                <Worldmap 
                    src="./image/world-map-movie.png" 
                    alt="세계지도" />
                <Arrow direction="up" />
            </Article>
        </main>
    )
}

export default Main;

// 코로나 차트
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function CovidChart({coronas}) {

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
                    borderColor: "rgb(54, 162, 235)",
                    },
                title: {
                display: true,
                align: 'center',
                color: 'black',
                font: {
                    size: 14,
                    weight: 300,
                },
                text: '달러(억)'
            },
            },
            y1: {
                id: 'y1',
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    borderColor: "rgb(255, 99, 132)",
                    },
                title: {
                display: true,
                align: 'center',
                color: 'black',
                font: {
                    size: 14,
                    weight: 300,
                },
                text: '달러(억)'
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

// styled-components
const Logo = styled.img`
    display: ${props => props.position === "description" ? "inline-block" : "block"};

    width: ${props => props.position === "description" ? 7 : 15.3}vw;
    height: ${props => props.position === "description" ? 4.7 : 8}vh;

    margin-bottom: ${props => props.position === "description" ? 0 : 4}vh;
    margin: ${props => props.position === "description" && "0 10px"};

    vertical-align: middle;
`;

const TitleStyle = styled.h1`
    font-size: 4.6vw;
    font-weight: 500;

    margin-bottom: 12vh;
`;

const Description = styled.p`
    width: 78.2vw;

    font-size: 2vw;
    font-weight: 500;
    text-align: start;

    margin-bottom: 4vh;
`;

const CoronaDiv = styled.div`
    width: 45.6vw;

    background-color: white;

    padding: 6.7vh 3.3vw;
`;

const Worldmap = styled.img`
    width: 58.6vw;
    height: 53.1vh;
`;
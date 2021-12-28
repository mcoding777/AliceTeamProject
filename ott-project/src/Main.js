import { Link } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import Button from './Button';
import './css/Main.css';

function CovidChart() {

    const data = {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            type: 'line',
            label: '영화관 관객수',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            data: [50000, 60000, 70000, 30000, 20000],
            tension: 0.5,
          },
          {
            type: 'line',
            label: 'OTT 구독자수',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            data: [10000, 30000, 40000, 70000, 80000, 60000],
            tension: 0.5,
          },
        ],
      };      

    return (
        <div className='covid_table'>
            <Chart type="line" data={data} />
        </div>
    )
}


// 첫 메인화면 컴포넌트
function Main() {
    return (
        <main>
            <article className='main'>
                <img src="./image/netflix-logo.png" alt="넷플릭스 로고" className='logo' />
                <h1>영화 제작사와 투자자 여러분<br />환영합니다</h1>
                <Link to="/page">
                    <Button text="시작하기" />
                </Link>
                <div id='arrow' />
            </article>
            <article className='how_to_use1'>
                <p>COVID-19로 인해 OTT 플랫폼의 영향력은 더욱 커졌습니다.<br />
                    여러분의 성공적인 영화 제작과 투자를 위해<br />
                    한국 컨텐츠의 영향력을 분석해드립니다.
                </p>
                <CovidChart />
                <div id='arrow' />
            </article>
            <article className='how_to_use2'>
                <p>우리 서비스는
                    <img src="./image/netflix-logo.png" alt="넷플릭스 로고" className='logo' />
                    한국 컨텐츠를 기준으로 분석합니다.<br />
                    각 나라에서 흥행하는 한국 컨텐츠를 바탕으로<br />
                    효율적인 벤치마킹을 경험해보십시오.
                </p>
                <img src="./image/world-map-movie.png" alt="세계지도" className='world_map' />
                <div id='arrow' />
            </article>
        </main>
    )
}

export default Main;
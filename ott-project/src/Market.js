import './css/Market.css';
import Arrow from './Arrow';
import { Chart } from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';

function Market() {
    return (
        <>
            <article className='marketContainer'>
                <div className='divContainer'>
                    <p>매년 넷플릭스에 릴리즈되는 한국 컨텐츠는 이렇습니다.</p>
                    <ReleaseChart />
                    <div id='arrow' />
                </div>
                <Arrow direction="down" />
            </article>
            <article className='marketContainer'>
                <div className='divContainer'>
                    <p>넷플릭스 한국 컨텐츠의 장르 분포도를 확인해보세요.</p>
                    <GenreChart />
                    <div id='arrow' className='uparrow' />
                </div>
                <Arrow direction="up" />
            </article>
        </>
    )
}

export default Market;

// styled-components
function ReleaseChart() {

    const data = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [
        {
          type: 'bar',
          label: '릴리즈되는 한국 컨텐츠 수',
          borderColor: '#BDBDBD',
          borderWidth: 5,
          backgroundColor: '#C4C4C4',
          data: [700, 600, 807, 432, 234, 453],
        },
      ],
    };
  
    return (
        <div className='releaseContainer'>
            <Bar type="bar" data={data} />
        </div>
    )
  }

function GenreChart() {

    const data = {
        labels: ['Action', 'Drama', 'Comedy', 'Crime', 'etc'],
        datasets: [
        {
            label: "장르 분포도",
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: ["red", "orange", "yellow", "green", "blue"],
            data: [25, 20, 25, 15, 15],
        },
        ],
    };

    const options = {
        maintainAspectRatio: false, // 가로 세로 비율 고정을 어떻게 할 것인가?
        plugins: {
            datalabels: {
                backgroundColor: "black",
                borderRadius: 5,
                padding: 10,
                color: 'white',
                textAlign: 'center',
                formatter: (value, ctx) => {
                    let index = ctx.dataIndex;
                    let label = ctx.chart.data.labels[index];
                    return label + '\n' + value + '%';
                },
            },
            legend: {
                position: 'right',
                labels: {
                    padding: 30, // 범례 사이 간격 : 상하는 조절할 수 없다!
                    usePointStyle: true,
                },
            },
        },
    }

return (
    <div className='genreContainer'>
        <Pie data={data} options={options} />
    </div>
)
}
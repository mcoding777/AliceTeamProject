import './css/Market.css';
import Arrow from './Arrow';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { Bar, Pie } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';

function Market() {

    const location = useLocation();
    console.log(location.state);
    // const { category, review } = location.pathname

    return (
        <main>
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
        </main>
    )
}

export default Market;

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
  
function ReleaseChart() {

    const data = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [
        {
          type: 'bar',
          label: '릴리즈되는 한국 컨텐츠 수',
          borderColor: '#1A374D',
          borderWidth: 5,
          backgroundColor: '#6998AB',
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

    // Chart.register(ChartDataLabels); 글로벌 플러그인

    const data = {
        labels: ['Action', 'Drama', 'Comedy', 'Crime', 'etc'],
        datasets: [
        {
            label: "장르 분포도",
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: [
                "#11052C",
                "#3D087B",
                "#F43B86",
                "#FFE459",
                "#3E8E7E",
            ],
            data: [25, 20, 25, 15, 15],
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
    <div className='genreContainer'>
        <Pie 
            data={data} 
            options={options} 
            plugins={[ChartDataLabels]} 
        />
    </div>
)
}
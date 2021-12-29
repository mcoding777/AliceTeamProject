import './css/Market.css';
import Arrow from './Arrow';
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

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
                    <div className='ex'>표 들어갈 곳</div>
                    <div id='arrow' className='uparrow' />
                </div>
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
            <Chart type="bar" data={data} />
        </div>
    )
  }
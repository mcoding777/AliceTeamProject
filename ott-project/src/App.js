import React from 'react';
import './App.css';

function App() {

  // 첫 메인화면 컴포넌트
  function Main() {
    return (
      <main>
        <article className='main'>
          <header>
            <div className='netflix_logo' />
            <h1>영화 제작사와 투자자 여러분<br />환영합니다</h1>
          </header>
          <footer>
            <Button text="시작하기" />
            <div className='arrow' />
          </footer>
        </article>
        <article className='how_to_use1'>
          <p>COVID-19로 인해 OTT 플랫폼의 영향력은 더욱 커졌습니다.<br />
            여러분의 성공적인 영화 제작과 투자를 위해<br />
            한국 컨텐츠의 영향력을 분석해드립니다.
          </p>
          <div className='covid_table'>표 들어갈 곳</div>
        </article>
        <article className='how_to_use2'>
          <p>우리 서비스는<img src="./netflix-log.png" alt="(넷플릭스 로고)" />한국 컨텐츠를 기준으로 분석합니다.<br />
            각 나라에서 흥행하는 한국 컨텐츠를 바탕으로<br />
            효율적인 벤치마킹을 경험해보십시오.
          </p>
          <div className='world_map' />
        </article>
      </main>
    )
  }

  // 빨간 버튼 컴포넌트
  function Button(props) {
    return (
      <div className='button'>{props.text}</div>
    )

  }
  return (
    <Main />
  );
}

export default App;

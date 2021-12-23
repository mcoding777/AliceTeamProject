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
          </footer>
        </article>
        <article className='how_to_use1'>
          <p>2번째페이지</p>
        </article>
        <article className='how_to_use2'>
          <p>3번째페이지</p>
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

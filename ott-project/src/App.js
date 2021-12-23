import React from 'react';
import './App.css';

function App() {
  function Main() {
    return (
      <main>
        <article className='main'>
          <header>
            <div className='netflix_logo' />
            <h1>영화 제작사와 투자자 여러분<br />환영합니다</h1>
          </header>
        </article>
      </main>
      
    )
  }
  return (
    <Main />
  );
}

export default App;

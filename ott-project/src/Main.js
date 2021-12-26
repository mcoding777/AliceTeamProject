import { Link } from 'react-router-dom';
import Button from './Button';
import './css/Main.css';

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
                <div className='arrow' />
            </article>
            <article className='how_to_use1'>
                <p>COVID-19로 인해 OTT 플랫폼의 영향력은 더욱 커졌습니다.<br />
                    여러분의 성공적인 영화 제작과 투자를 위해<br />
                    한국 컨텐츠의 영향력을 분석해드립니다.
                </p>
                <div className='covid_table'>표 들어갈 곳</div>
                <div className='arrow' />
            </article>
            <article className='how_to_use2'>
                <p>우리 서비스는
                    <img src="./image/netflix-logo.png" alt="넷플릭스 로고" className='logo' />
                    한국 컨텐츠를 기준으로 분석합니다.<br />
                    각 나라에서 흥행하는 한국 컨텐츠를 바탕으로<br />
                    효율적인 벤치마킹을 경험해보십시오.
                </p>
                <img src="./image/world-map-movie.png" alt="세계지도" className='world_map' />
                <div className='arrow' />
            </article>
        </main>
    )
}

export default Main;
import Button from './Button';
import Arrow from './Arrow';
import { Article } from './AreaTag';
import logo from './image/netflix-logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CovidChart } from './DataChart';

// 첫 메인화면 컴포넌트
function Main() {

    // 코로나 차트 데이터
    const [coronas, setCoronas] = useState([]);

    const getCorona = async () => {
        const corona = await fetch(`https://www.sebaschan.shop/corona`);
        const corona_json = await corona.json();
        setCoronas(corona_json);
    };

    // console.log(coronas);

    // 페이지가 렌더링되면 코로나 차트 데이터 받아오기 & 세션 스토리지 클리어
    useEffect(() => {
        sessionStorage.clear(); 
        getCorona(); 
    }, []);

    return (
        <main>
            <Article id="section1">
                <Logo 
                    src={logo} 
                    alt="넷플릭스 로고" 
                />
                <TitleStyle>영화 제작사와 투자자 여러분<br />환영합니다</TitleStyle>
                <Arrow direction="down" />
            </Article>
            <Article id="section2">
                <Description>
                    2020년 COVID-19로 인해 OTT 플랫폼의 영향력은 더욱 커졌습니다.<br />
                    여러분의 성공적인 영화 제작과 투자를 위해<br />
                    한국 컨텐츠의 영향력을 분석해드립니다.
                </Description>
                <CovidChart coronas={coronas} />
                <Arrow direction="down" />
            </Article>
            <Article id="section3">
                <Description>
                Netflix를 통해 k-contents의 글로벌 영향력 지수를 평가하였습니다.<br />
                연도별 장르별 릴리즈된 컨텐츠를 확인해 보시고<br />
                작품성, 글로벌 확장성, 화제성을 바탕으로 평가된 등급을 확인해보세요.<br />
                세계시장에 대한 새로운 통찰을 드립니다.<br />
                </Description>
                <Worldmap 
                    src="./image/world-map-movie.png" 
                    alt="세계지도" />
                <Link to="/page">
                    <Button text="시작하기" />
                </Link>
            </Article>
        </main>
    )
}

export default Main;

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

    margin-bottom: 100px;
`;

const Description = styled.p`
    width: 78.2vw;

    font-size: 2vw;
    font-weight: 500;
    text-align: start;

    margin-bottom: 4vh;
`;

const Worldmap = styled.img`
    width: 58.6vw;
    height: 53.1vh;
`;
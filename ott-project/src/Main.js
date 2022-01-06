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
                    src={logo} 
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
                        src={logo}
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

const Worldmap = styled.img`
    width: 58.6vw;
    height: 53.1vh;
`;
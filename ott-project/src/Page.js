import MenuBox from './MenuBox';
import Market from './Market';
import KCard from './KCard';
import styled from 'styled-components';
import { useState } from 'react';

function Page() {
    const [result, setResult] = useState({
        category: "",
        review: ""
    });
    const renderResult = renderResults();

    // MenuBox에서 선택한 항목 가져오는 함수
    function getResult(c, r) {
        setResult(current => {
            const newCurrent = {...current};
            newCurrent.category = c;
            newCurrent.review = r;
            return newCurrent;
        });
    }

    // 선택한 항목에 따라 페이지를 렌더링해주는 함수
    function renderResults() {
        if (result.review === "market") {
            return <Market category={result.category} />
        }
        else if (result.review === "kcontents") {
            return <KCard category={result.category} />}
        
        return (
            <article className='page'>
                <PageP>원하는 분류를 선택하세요.</PageP>
            </article>
            )
        }

    // 선택한 분류 확인해보기
    console.log(`카테고리는 ${result.category ? "movie" : "tv"}를 선택했습니다`);
    console.log(`리뷰는 ${result.review ? "market" : "kcontents"}를 선택했습니다`);

    return (
        <>
            <MenuBox result={getResult} />
            <main>
                {renderResult}
            </main>
        </>
    )
}

export default Page;

// styled-components
const PageP = styled.p`
    font-size: 60px;
    font-weight: bold;

    position: absolute;

    left: 40%;
    bottom: 50%;
`;
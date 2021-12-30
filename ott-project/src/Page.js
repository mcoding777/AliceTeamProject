import MenuBox from './MenuBox';
import Market from './Market';
import KCard from './KCard';
import styled from 'styled-components';
import { useState } from 'react';

function Page() {

    const [category, setCategory] = useState({});
    const [review, setReview] = useState({});
    const [renderMarketFlag, setRenderMarketFlag] = useState(false);
    const [renderKcontentsFlag, setRenderKcontentsFlag] = useState(false);
    const renderResult = renderResults();

    function getCategory(value) {
        setCategory(() => {
            const newCurrent = {
                movie: false,
                tv: false
            };
            newCurrent[value] = true;
            return newCurrent;
        })
    }

    function getReview(value) {
        setReview(() => {
            const newCurrent = {
                market: false,
                kcontents: false
            };
            newCurrent[value] = true;
            return newCurrent;
        })
    }

    function getResult() {
        if (Object.keys(category) == false || Object.keys(review) == false) {
            alert("선택하지않은 항목이 있습니다.");
        }
        else if (review.market) {
            setRenderKcontentsFlag(false);
            setRenderMarketFlag(true);
        }
        else if (review.kcontents) {
            setRenderKcontentsFlag(true);
            setRenderMarketFlag(false);
        }
    }

    function renderResults() {
        if (renderMarketFlag === false && renderKcontentsFlag === false) {
            return (
                <article className='page'>
                    <PageP>원하는 분류를 선택하세요.</PageP>
                </article>
                )}
        else if (renderMarketFlag) {
                return <Market />}
        else if (renderKcontentsFlag) {
                return <KCard />}
    }

    // 선택한 분류 확인해보기
    console.log(`카테고리는 ${category.movie ? "movie" : "tv"}를 선택했습니다`);
    console.log(`리뷰는 ${review.market ? "market" : "kcontents"}를 선택했습니다`);

    return (
        <>
        <MenuBox category={getCategory} review={getReview} result={getResult} />
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
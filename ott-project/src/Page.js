import './css/Page.css';
import MenuBox from './MenuBox';
import Market from './Market';
import Kcontents from './Kcontents';
import { useState } from 'react';

function Page() {

    const [category, setCategory] = useState({});
    const [review, setReview] = useState({});
    const renderCheck = renderChecked();

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

    function renderChecked() {
        if (Object.keys(category) == false || Object.keys(review) == false) {
            return (
                <article className='page'>
                    <p>원하는 분류를 선택하세요.</p>
                </article>
                )}
        else if (review.market) {
            return <Market />}
        else if (review.kcontents) {
            return <Kcontents />}
    }

    // 선택한 분류 확인해보기
    console.log(`카테고리는 ${category.movie ? "movie" : "tv"}를 선택했습니다`);
    console.log(`리뷰는 ${review.market ? "market" : "kcontents"}를 선택했습니다`);
    console.log(renderCheck);

    return (
        <>
        <MenuBox category={getCategory} review={getReview} />
        <main>
            {renderCheck}
        </main>
        </>
    )
}

export default Page;
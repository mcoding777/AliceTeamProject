import './css/Page.css';
import MenuBox from './MenuBox';

function Page() {

    function getCategory(value) {
        console.log(`카테고리는 ${value}를 선택했습니다`);
    }

    function getReview(value) {
        console.log(`리뷰는 ${value}를 선택했습니다`);
    }
    return (
        <main>
            <article className='page'>
                <div className='grid_container'>
                    <MenuBox category={getCategory} review={getReview} />
                    <p>원하는 분류를 선택하세요.</p>
                </div>
            </article>
        </main>
    )
}

export default Page;
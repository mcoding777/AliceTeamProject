import './css/Page.css';
import MenuBox from './MenuBox';

function Page() {
    return (
        <main>
            <article className='page'>
                <div className='grid_container'>
                    <MenuBox />
                    <p>원하는 분류를 선택하세요.</p>
                </div>
            </article>
        </main>
    )
}

export default Page;
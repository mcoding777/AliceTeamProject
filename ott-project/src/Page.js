import './css/Page.css';
import MenuBox from './MenuBox';

function Page() {
    return (
        <main>
            <article className='page'>
                <div className='grid_container'>
                    <MenuBox />
                </div>
            </article>
        </main>
    )
}

export default Page;
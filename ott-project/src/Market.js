import './css/Market.css';

function Market() {
    return (
        <>
            <article className='marketContainer'>
                <div className='divContainer'>
                    <p>매년 넷플릭스에 릴리즈되는 한국 컨텐츠는 이렇습니다.</p>
                    <div className='ex'>표 들어갈 곳</div>
                    <div id='arrow' />
                </div>
            </article>
            <article className='marketContainer'>
                <div className='divContainer'>
                    <p>넷플릭스 한국 컨텐츠의 장르 분포도를 확인해보세요.</p>
                    <div className='ex'>표 들어갈 곳</div>
                    <div id='arrow' className='uparrow' />
                </div>
            </article>
        </>
    )
}

export default Market;
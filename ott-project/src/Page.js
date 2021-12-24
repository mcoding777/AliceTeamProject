import React from 'react';
import './css/Page.css';

function Page() {
    return (
        <main>
            <article className='page'>
                <div className='grid_container'>
                    <div className='menubox'>
                        <p>카테고리별</p>
                        <div>
                            <label><input type="checkbox" />영화</label>
                            <label><input type="checkbox" />TV쇼</label>
                        </div> 
                    </div>
                    <div>

                    </div>
                </div>
            </article>
        </main>
    )
}

export default Page;
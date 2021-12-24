import React from 'react';
import './css/Page.css';

function Page1() {
    return (
        <main>
            <article className='page1'>
                <div className='grid_container'>
                    <div className='menubox'>
                        <p>카테고리별</p>
                        <div>
                            <label><input type="checkbox" />영화</label>
                        </div> 
                    </div>
                    <div>

                    </div>
                </div>
            </article>
        </main>
    )
}

export default Page1;
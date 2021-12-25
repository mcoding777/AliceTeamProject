import React from 'react';
import './css/Page.css';

function Page() {
    return (
        <main>
            <article className='page'>
                <div className='grid_container'>
                    <div className='menubox'>
                        <p>CATEGORY</p>
                        <div>
                            <label><input type="checkbox" /> Movie</label>
                            <label><input type="checkbox" /> TV Series</label>
                        </div> 
                        <p>REVIEW</p>
                        <div>
                            <label><input type="checkbox" /> Market</label>
                            <label><input type="checkbox" /> K-Contents</label>
                        </div> 
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Page;
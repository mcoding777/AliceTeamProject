import MenuBox from './MenuBox';
import Market from './Market';
import ClassCard from './ClassCard';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Page() {
    const [result, setResult] = useState({
        category: "",
        review: ""
    });
    const navigate = useNavigate();


    // MenuBox에서 선택한 항목 가져오는 함수
    function getResult(c, r) {
        setResult(current => {
            const newCurrent = {...current};
            newCurrent.category = c;
            newCurrent.review = r;
            return newCurrent;
        });
    }

    // 선택한 항목에 따라 페이지를 바꿔주는 함수
    function renderResults() {
        if (result.review === "market") {
            navigate("/market", {state: result});
            // return <Market category={result.category} />
        }
        else if (result.review === "kcontents") {
            navigate("/kcontents");
            // return <ClassCard category={result.category} />
        }
    };

    useEffect(() => {
        renderResults();
    }, [result]);

    return (
        <>
            <MenuBox result={getResult} />
            <main>
                <article className='page'>
                    <PageP>원하는 분류를 선택하세요.</PageP>
                </article>
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
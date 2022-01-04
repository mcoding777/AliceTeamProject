import styled from 'styled-components';
import Article from './Article';

function Page() {
    return (
        <main>
            <Article>
                <PageP>원하는 분류를 선택하세요.</PageP>
            </Article>
        </main>
    )
}

export default Page;

// styled-components
const PageP = styled.p`
    font-size: 60px;
    font-weight: bold;

    margin-left: 300px;
`;
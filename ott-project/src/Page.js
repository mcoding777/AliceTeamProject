import styled from 'styled-components';
import { Article, Contents } from './components/AreaTag';

function Page() {
    return (
        <Contents>
            <Article>
                <PageP>원하는 분류를 선택하세요.</PageP>
            </Article>
        </Contents>
    )
}

export default Page;

// styled-components
const PageP = styled.p`
    font-size: 4vw;
    font-weight: bold;
`;
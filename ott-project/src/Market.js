import Arrow from './Arrow';
import { Article, Contents } from './AreaTag';
import Text from './Text';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReleaseChart, GenreChart } from './DataChart';

function Market() {

    // 선택한 카테고리와 리뷰 정보
    const location = useLocation();
    const category = location.state.category;

    // API 요청해서 받은 데이터
    const [releaseData, setReleaseData] = useState({});
    const [genreData, setGenreData] = useState({});
    const [loading, setLoading] = useState(true);

    // API 오류 뜰 때 사용할 더미 데이터
    // const dummyRelease = {
    //     "2015": 400,
    //     "2016": 500,
    //     "2017": 400,
    //     "2018": 300,
    //     "2019": 450,
    //     "2020": 350
    // }
    // const dummyGenre = {
    //     "Action": 25,
    //     "Drama": 30,
    //     "Comedy": 35,
    //     "Crime": 20,
    //     "Fantasy": 10,
    //     "Etc": 5
    // }

    // console.log(genreData);

    const getChartData = async () => {
        const APIrelease = await fetch(`https://www.sebaschan.shop/${category}/market`);
        const APIjson = await APIrelease.json();
        if (category === "movie") {
            setReleaseData(APIjson.movie_num);
            setGenreData(APIjson.genre_percent);
            setLoading(false);
        }
        else {
            setReleaseData(APIjson.tvseries_num);
            setGenreData(APIjson.genre_percent);
            setLoading(false);
        }
    }

    // 카테고리가 바뀔 때 스크롤바는 항상 최상단으로 이동 & 차트 데이터 받아오기
    useEffect(() => { 
        window.scrollTo({top:0, left:0, behavior:'smooth'});
        getChartData();
     }, [category]);

    return (
        <Contents>
            {loading ? 
                <Article>
                    <Loading />
                </Article>
            :
                <>
                    <Article>
                        <Text>매년 넷플릭스에 릴리즈되는 한국 컨텐츠는 이렇습니다.</Text>
                        <ReleaseChart releaseData={releaseData} />
                        <Arrow direction="down" />
                    </Article>
                    <Article>
                        <Text>넷플릭스 한국 컨텐츠의 장르 분포도를 확인해보세요.</Text>
                        <GenreChart genreData={genreData} />
                        <Arrow direction="up" />
                    </Article>
                </> 
            }

        </Contents>
    )
}

export default Market;
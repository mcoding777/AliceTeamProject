import Main from './Main';
import Page from './Page';
import Market from './Market';
import ClassCard from './ClassCard';
import MenuBox from './MenuBox'
import './css/reset.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {

  const [result, setResult] = useState({
    category: "",
    review: ""
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [MenubarFlag, setMenubarFlag] = useState(false);

  // // MenuBox에서 선택한 항목 가져오는 함수
  // function getResult(c, r) {
  //   setResult(current => {
  //       const newCurrent = {...current};
  //       newCurrent.category = c;
  //       newCurrent.review = r;
  //       return newCurrent;
  //   });
  // }

  // MenuBar 렌더링 플래그 세우는 함수
  function renderSidebar() {
    if (location.pathname === "/") {
      setMenubarFlag(false);
    }
    else {
      setMenubarFlag(true);
    }
  }

  // 선택한 항목에 따라 페이지를 바꿔주는 함수
  function renderResults() {
    if (result.review === "market") {
      navigate("/market", {state: result});
        // return <Market category={result.category} />
    }
    else if (result.review === "kcontents") {
      navigate("/kcontents", {state: result});
        // return <ClassCard category={result.category} />
    }
  };

  useEffect(() => { renderSidebar(); }, []);
  useEffect(() => { renderResults(); }, [result]);

  return (
    <>
      {MenubarFlag && <MenuBox />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page" element={<Page />} />
        <Route path="/market" element={<Market />} />
        <Route path="/kcontents" element={<ClassCard />} />
      </Routes>
    </>
  );
}

export default App;

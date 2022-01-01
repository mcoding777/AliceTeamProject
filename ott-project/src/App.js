import Main from './Main';
import Page from './Page';
import Market from './Market';
import ClassCard from './ClassCard';
import MenuBox from './MenuBox'
import Kcontents from './Kcontents';
import './css/reset.css';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page" element={<MenuBox />}>
          <Route path="" element={<Page />} />
          <Route path="market" element={<Market />} />
          <Route path="kcontents" element={<ClassCard />} />
          <Route path="kcontents/*" element={<Kcontents />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

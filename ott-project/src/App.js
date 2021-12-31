import Main from './Main';
import Page from './Page';
import Market from './Market';
import ClassCard from './ClassCard';
import './css/reset.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/page" element={<Page />} />
      <Route path="/market" element={<Market />} />
      <Route path="/kcontents" element={<ClassCard />} />
    </Routes>
  );
}

export default App;

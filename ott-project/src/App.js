import Main from './Main';
import Page from './Page';
import Market from './Market';
import KCard from './KCard';
import Kcontents from './Kcontents';
import './css/reset.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/page" element={<Page />} />
      <Route path="/kcontents" element={<Kcontents />} />
    </Routes>
  );
}

export default App;

import Main from './Main';
import Page from './Page';
import './css/reset.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/page" element={<Page />} />
    </Routes>
  );
}

export default App;

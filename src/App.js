import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Email from './pages/email';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/email" element={<Email />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

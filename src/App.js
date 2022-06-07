import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Page from './pages/Page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/board" element={<Board />}>
            <Route path=":id" element={<Page/>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

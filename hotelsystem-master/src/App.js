import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Topbar from './component/Topbar.js';
import BottamBar from './component/BottamBar';
import Home from './component/Home.jsx';
import About from './component/About.js';
import Gallery from './component/Gallery.js';


function App() {
  return (
    <div className="App">

      <Topbar />
      <Home />
      <BottamBar />
      <About />
      <Gallery/>
    </div>
  );
}

export default App;

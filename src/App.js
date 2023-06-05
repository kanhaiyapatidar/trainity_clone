import './App.css';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import Topcompanies from './component/Topcompanies';
import Skills from './component/Skills';
import Placement from './component/Placement';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Topcompanies/>
       <Skills/>
       <Placement/>
    </div>
  );
}

export default App;

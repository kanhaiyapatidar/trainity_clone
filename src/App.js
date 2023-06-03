import './App.css';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import Topcompanies from './component/Topcompanies';
import Skills from './component/Skills';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Topcompanies/>
       <Skills/>
       
    </div>
  );
}

export default App;

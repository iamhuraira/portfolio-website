// import './App.css';
import './index.css';
import Hero from './components/Hero/Hero'; 
import Specializing from './components/Specializing/Specializing';
import Experties from './components/Experties/Experties';
import PortfolioProjects from './components/LargestProject/PortfolioProjects';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <Hero />
      <Specializing />
      <Experties />
      <PortfolioProjects />
      <Education />
      
    </div>
  );
}

export default App;

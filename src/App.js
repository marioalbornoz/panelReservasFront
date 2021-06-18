// import logo from './logo.svg';
import './App.css';
import { Diagrams } from './components/Diagrams';
import { Navbar } from './components/Navbar';
// import HorizontalFlow from './components/DiagramsHorizontal';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      
      <Diagrams />

      {/* <HorizontalFlow /> */}
    </div>
    </>
  );
}

export default App;

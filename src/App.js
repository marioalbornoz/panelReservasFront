// import logo from './logo.svg';
import './App.css';
import { Diagrams } from './components/Diagrams';
import { Navbar } from './components/Navbar';
// import HorizontalFlow from './components/DiagramsHorizontal';

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="App">
        <Diagrams />

        <HorizontalFlow />
      </div> */}
    <div class="row">
      <div class="col s5">1</div>
      <div class="col s4">2</div>
      <div class="col s3">3</div>
    </div>
      <div className="row">
        <div className="col s12">
        <Diagrams />
        </div>
      </div>
    </>
  );
}

export default App;

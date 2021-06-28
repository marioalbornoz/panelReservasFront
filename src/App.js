import './App.css';
import { Diagrams } from './components/Diagrams';
import { Navbar } from './components/Navbar';
import StockProvider from './context/StockContext';
import TotalProvider from './context/TotalContext';

import 'react-calendar/dist/Calendar.css';
import Calendar from './components/Calendar';
import { Kpi } from './components/Kpi';

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="App">
        <Diagrams />

        <HorizontalFlow />
      </div> */}
      <div className="row">
        <div className="col s5 m-2">
          <Calendar />
          <div className="col s7">
            <Kpi />
          </div>
        </div>

        <div className="col s4">
          <div className="row">
            <div className="col s5">2.1</div>
            <div className="col s7 m-2">
              <Kpi />
            </div>
          </div>
        </div>
        <div className="col s3 m-2">
          <div className="col s5">
            <Kpi />
          </div>
        </div>
      </div>
      <TotalProvider>
        <StockProvider>
          <div className="row">
            <div className="col s12">
              <Diagrams />
            </div>
          </div>
        </StockProvider>
      </TotalProvider>
    </>
  );
}

export default App;

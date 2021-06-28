import './App.css';
import { Diagrams } from './components/Diagrams';
import { Navbar } from './components/Navbar';
import StockProvider from './context/StockContext';
import TotalProvider from './context/TotalContext';

// import 'react-calendar/dist/Calendar.css';
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
      <TotalProvider>
        <StockProvider>
          <div className="row titles">
            <div className="col s8 blue darken-1 flag dad">Distribución - DAD</div>
            <div className="col s4 blue darken-1 flag vta">Vta vde/transporte</div>
          </div>
          <div className="row">
            <div className="col s5 m-2">
              <Calendar />
              <div className="col s4"></div>
              <div className="col s5">
                <Kpi primero="Cumplimiento" segundo="Pendientes" />
              </div>
            </div>

            <div className="col s4">
              <div className="row">
                <div className="col s5"></div>
                <div className="col s4">
                  <Kpi
                    primero="Reservas Rescatadas"
                    segundo="Reservas Pendientes"
                  />
                </div>
                <div className="col s3"></div>
              </div>
            </div>

            <div className="col s3 m-2">
              <div className="col s9">
                <Kpi
                  primero="Reservas Bloqueadas menor a 48 hrs"
                  segundo="Reservas Redespacho"
                />
              </div>
            </div>

          </div>
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

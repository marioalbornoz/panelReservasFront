import './App.css';
import { Diagrams } from './components/Diagrams';
import { Navbar } from './components/Navbar';
import StockProvider from './context/StockContext';
import TotalProvider from './context/TotalContext';

// import 'react-calendar/dist/Calendar.css';
import Calendar from './components/Calendar';
import { Kpi } from './components/Kpi';
import ProveedorProvider from './context/ProveedorContext';
import DateProvider from './context/DateContext';
import VtaVdeProvider from './context/VtaVdeContext';

// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="App">
        <Diagrams />
        
        <HorizontalFlow />
      </div> */}

      <DateProvider>
        <VtaVdeProvider>
          <ProveedorProvider>
            <StockProvider>
              <TotalProvider>
                <div className="row titles">
                  <div className="col s8 blue darken-1 flag">
                    Distribución - DAD
                  </div>
                  <div className="col s3 blue darken-1 flag ">
                    Vta vde/transporte
                  </div>
                </div>
                <div className="row">
                  <div className="col s5">
                    <div className="col s2"></div>
                    <Calendar />
                    <div className="col s2"></div>
                    <div className="col s5">
                      <Kpi
                        primero="Cumplimiento"
                        segundo="Pendientes"
                        color="light-blue lighten-5"
                      />
                    </div>
                  </div>

                  <div className="col s4">
                    <div className="row">
                      <div className="col s5"></div>
                      <div className="col s4">
                        <Kpi
                          primero="Reservas Rescatadas"
                          segundo="Reservas Pendientes"
                          color="lime lighten-5"
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
                        color="purple lighten-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <Diagrams />
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col s3">
                    <Loader
                      type="Watch"
                      color="#00BFFF"
                      height={30}
                      width={30}
                      timeout={60000} //3 secs
                    />
                  </div>
                </div> */}
              </TotalProvider>
            </StockProvider>
          </ProveedorProvider>
        </VtaVdeProvider>
      </DateProvider>
    </>
  );
}

export default App;

import axios from "axios";
import React, { useState,createContext, useEffect } from "react";
import { useContext } from "react";
import Config from "../utils/Config";
import { DateContext } from "./DateContext";
export const TotalContext = createContext();

const TotalProvider = (props) => {

  const {date} = useContext(DateContext);

  const [ totalcount, setTotalcount] = useState();
  const [reservasok, setReservasok] = useState();
  const [reservaspendientes, setReservasPendientes] = useState();
  const [pendientesproveedor, setPendientesProveedor] = useState();
  const [prendientesbodegas, setPendientesBodega] = useState();

  // ejecutar llamado a la api
  useEffect(() => {
    const obtenerCountTotal = async () => {
      try {
          if (date) {
            const allCounts = await axios.get(`${Config.totalesUrl}/${date}`);
            console.log(allCounts);
            setTotalcount(allCounts.data.total[0]);
            setReservasok(allCounts.data.reservasok);
            setReservasPendientes(allCounts.data.pendientes.total[0]);
            setPendientesProveedor(
              allCounts.data.pendientes.pendientes_proveedor.total
            );
            setPendientesBodega(allCounts.data.pendientes.pendientes_bodega);
          }
        
      } catch(err){
        if(err.status !== 404){
            console.log(`Error 404`);
        }
      }
    }
    obtenerCountTotal();
  }, [date ])
  return (
    <TotalContext.Provider
      value={{
        totalcount,
        reservasok,
        reservaspendientes,
        pendientesproveedor,
        prendientesbodegas,
      }}
    >
      {props.children}
    </TotalContext.Provider>
  );
};

export default TotalProvider;
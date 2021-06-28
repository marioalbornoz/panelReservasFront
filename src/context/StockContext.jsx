import axios from "axios";
import React, { useState,createContext, useEffect } from "react";
import Config from "../utils/Config";

export const StockContext = createContext();

const StockProvider = (props) => {

  const [ totalbodega, setTotalBodega] = useState();
  const [reservasresctadas, setReservasRescatadas] = useState();
  const [reservasinfopendientes, setReservasInfoPendientes] = useState();
//   const [pendientesproveedor, setPendientesProveedor] = useState();
//   const [prendientesbodegas, setPendientesBodega] = useState();

  // ejecutar llamado a la api
  useEffect(() => {
    const obtenerCountBodega = async () => {
      try {
          const allCounts = await axios.get(Config.bodegaUrl);
          console.log('====================================');
          console.log(allCounts);
          console.log('====================================');
          setTotalBodega(allCounts.data.total);
          setReservasRescatadas(allCounts.data.data.reservas_rescatadas.total);
          setReservasInfoPendientes(allCounts.data.data.Informadas_pendientes.total);
        //   setPendientesProveedor(allCounts.data.pendientes.pendientes_proveedor.total);
        //   setPendientesBodega(allCounts.data.pendientes.pendientes_bodega);
      } catch(err){
        if(err.status !== 404){
            console.log(`Error 404`);
        }
      }
    }
    obtenerCountBodega();
  }, [])
  return (
    <StockContext.Provider
      value={{
        totalbodega,
        reservasresctadas,
        reservasinfopendientes,
        // pendientesproveedor,
        // prendientesbodegas,
      }}
    >
      {props.children}
    </StockContext.Provider>
  );
};

export default StockProvider;
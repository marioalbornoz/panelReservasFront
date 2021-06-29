import axios from "axios";
import React, { useState,createContext, useEffect } from "react";
import { useContext } from "react";
import Config from "../utils/Config";
import { DateContext } from "./DateContext";

export const StockContext = createContext();

const StockProvider = (props) => {

  const {date} = useContext(DateContext);
  const [ totalbodega, setTotalBodega] = useState();
  const [reservasresctadas, setReservasRescatadas] = useState();
  const [reservasresctadashoy, setReservasRescatadasHoy] = useState();
  const [reservasresctadasmanana, setReservasRescatadasManana] = useState();
  const [reservasinfopendientes, setReservasInfoPendientes] = useState();
  const [reservaspdtescambiofecha, setReservasPdtesCambioFecha] = useState();
  const [reservapdteredespacho, setReservasPdtesRedespacho] = useState();
//   const [pendientesproveedor, setPendientesProveedor] = useState();
//   const [prendientesbodegas, setPendientesBodega] = useState();

  // ejecutar llamado a la api
  useEffect(() => {
    const obtenerCountBodega = async () => {
      try {
          const allCounts = await axios.get(`${Config.bodegaUrl}/${date}`);
          console.log(allCounts);
          setTotalBodega(allCounts.data.total);
          setReservasRescatadas(allCounts.data.data.reservas_rescatadas.total);
          setReservasRescatadasHoy(allCounts.data.data.reservas_rescatadas.despacho_dia);
          setReservasRescatadasManana(allCounts.data.data.reservas_rescatadas.despacho_dia_siguiente);
          setReservasInfoPendientes(allCounts.data.data.Informadas_pendientes.total);
          setReservasPdtesCambioFecha(allCounts.data.data.Informadas_pendientes.cambio_fecha.total)
          setReservasPdtesRedespacho(allCounts.data.data.Informadas_pendientes.pendientes_redespacho)
          
      } catch(err){
        if(err.status !== 404){
            console.log(`Error 404`);
        }
      }
    }
    obtenerCountBodega();
  }, [date])
  return (
    <StockContext.Provider
      value={{
        totalbodega,
        reservasresctadas,
        reservasresctadashoy,
        reservasresctadasmanana,
        reservasinfopendientes,
        reservaspdtescambiofecha,
        reservapdteredespacho
        // pendientesproveedor,
        // prendientesbodegas,
      }}
    >
      {props.children}
    </StockContext.Provider>
  );
};

export default StockProvider;
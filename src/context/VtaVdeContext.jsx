import axios from "axios";
import React, { useState,createContext, useEffect, useContext } from "react";
import Config from "../utils/Config";
import { DateContext } from "./DateContext";

export const VtaVdeContext = createContext();

const VtaVdeProvider = (props) => {

  const { date } = useContext(DateContext);
  const [ stockbloqueadas, setBloqueadas] = useState();
  const [conredespacho, setIConRedespacho] = useState();
  const [provbloqueadas, setProvBloqueadas] = useState();
  const [nuevafecha, setNuevaFecha] = useState();
  // ejecutar llamado a la api
  useEffect(() => {
    const obtenerCountBodega = async () => {
      try {
        if (date) {
          const allCounts = await axios.get(`${Config.urlBase}VtaVde/${date}`);
          console.log(allCounts);
          setBloqueadas(allCounts.data.stock_bloqueadas);
          setIConRedespacho(allCounts.data.conredespacho);
          setProvBloqueadas(allCounts.data.nueva_fecha);
          setNuevaFecha(allCounts.data.prov_bloqueadas);
        }
      } catch(err){
        if(err.status !== 404){
            console.log(`Error 404`);
        }
      }
    }
    obtenerCountBodega();
  }, [date])
  return (
    <VtaVdeContext.Provider
      value={{
        stockbloqueadas,
        conredespacho,
        nuevafecha,
        provbloqueadas
      }}
    >
      {props.children}
    </VtaVdeContext.Provider>
  );
};

export default VtaVdeProvider;
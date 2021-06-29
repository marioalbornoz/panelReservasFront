import axios from "axios";
import React, { useState,createContext, useEffect, useContext } from "react";
import Config from "../utils/Config";
import { DateContext } from "./DateContext";

export const ProveedorContext = createContext();

const ProveedorProvider = (props) => {

  const { date } = useContext(DateContext);
  const [ rescatadas, setRescatadas] = useState();
  const [informadaspedtes, setInformadasPdtes] = useState();
//   const [pendientesproveedor, setPendientesProveedor] = useState();
//   const [prendientesbodegas, setPendientesBodega] = useState();
    console.log('desde ell provedor context',date);
  // ejecutar llamado a la api
  useEffect(() => {
    const obtenerCountBodega = async () => {
      try {
          const allCounts = await axios.get(`${Config.urlBase}proveedor/${date}`);
          console.log('====================================');
          console.log(allCounts);
          console.log('====================================');
          setRescatadas(allCounts.data.rescatadas);
          setInformadasPdtes(allCounts.data.Informadas_pendientes);
          
      } catch(err){
        if(err.status !== 404){
            console.log(`Error 404`);
        }
      }
    }
    obtenerCountBodega();
  }, [date])
  return (
    <ProveedorContext.Provider
      value={{
        rescatadas,
        informadaspedtes,
      }}
    >
      {props.children}
    </ProveedorContext.Provider>
  );
};

export default ProveedorProvider;
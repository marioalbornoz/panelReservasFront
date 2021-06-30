import React from 'react'
import { useContext } from 'react';
import { ProveedorContext } from '../context/ProveedorContext';
import { StockContext } from '../context/StockContext';
import { TotalContext } from '../context/TotalContext';

export const Kpi = ({primero, segundo, color}) => {

  const {
    totalcount,
    reservasok,
    reservaspendientes,
    pendientesproveedor,
    prendientesbodegas,
  } = useContext(TotalContext);
  
    const {reservasresctadas} = useContext(StockContext)
    const {rescatadas} = useContext(ProveedorContext);

    const mostrarPorcentaje =(a,b,c)=> {
      if(c){
        return `${(b*100/a).toFixed(2)}%`;
      } 
    }  

    return (
      <div className={`card ${color} tarjeta`}>
        <p>KPIS</p>
        <p>
          % {primero}{" "}
          {primero === "Cumplimiento"
            ? mostrarPorcentaje(totalcount, reservasok, true)
            : primero === "Reservas Rescatadas"
            ? mostrarPorcentaje(
                pendientesproveedor + prendientesbodegas,
                reservasresctadas + rescatadas,
                true
              )
            : primero === "Reservas Bloqueadas menor a 48 hrs"
            ? "100%"
            : null}
        </p>
        <p>
          % {segundo}{" "}
          {segundo === "Pendientes"
            ? mostrarPorcentaje(totalcount, reservaspendientes, true)
            : segundo === "Reservas Pendientes"
            ? "10%"
            : segundo === "Reservas Redespacho"
            ? "20%"
            : null}
        </p>
      </div>
    );
}

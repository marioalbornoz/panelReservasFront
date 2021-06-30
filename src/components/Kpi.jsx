import React from 'react'
// import { useState } from 'react';
import { useContext } from 'react';
import { ProveedorContext } from '../context/ProveedorContext';
import { StockContext } from '../context/StockContext';
import { TotalContext } from '../context/TotalContext';

export const Kpi = ({primero, segundo, color}) => {

  const {
    totalcount,
    reservasok,
    reservaspendientes,
    prendientesbodegas,
  } = useContext(TotalContext);
  
    const {reservasresctadas, reservasinfopendientes} = useContext(StockContext)
    const {rescatadas, informadaspedtes} = useContext(ProveedorContext);


    const bodegaTotal = (a,b,c,d) => {
      if(a){
          const reinyectado = (parseInt(b) + parseInt(c)) - parseInt(d);
          return parseInt(parseInt(reinyectado) + parseInt(a));
      }
    }
    const mostrarPorcentaje =(a,b,c)=> {
      console.log(a);
      if(c){
        return `${(parseInt(b)*100/parseInt(a)).toFixed(2)}%`;
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
              bodegaTotal(reservaspendientes, reservasresctadas, reservasinfopendientes, prendientesbodegas),
                parseInt(reservasresctadas) + parseInt(rescatadas),
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
            ? mostrarPorcentaje(
              bodegaTotal(reservaspendientes, reservasresctadas, reservasinfopendientes, prendientesbodegas),
                parseInt(reservasinfopendientes) + parseInt(informadaspedtes),
                true
              )
            : segundo === "Reservas Redespacho"
            ? "100%"
            : null}
        </p>
      </div>
    );
}

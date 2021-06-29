import React from 'react'

export const Kpi = ({primero, segundo, color}) => {
    return (
      <div className={`card ${color} tarjeta`}>
        <p>KPIS</p>
        <p>% {primero}</p>
        <p>% {segundo}</p>
      </div>
    );
}

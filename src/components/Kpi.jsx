import React from 'react'

export const Kpi = ({primero, segundo}) => {
    return (
      <div className="card light-blue darken-1 tarjeta">
        <p>KPIS</p>
        <p>% {primero}</p>
        <p>% {segundo}</p>
      </div>
    );
}

import React from "react";
import { useContext } from "react";
// import { Spinner } from "react-bootstrap";
import ReactFlow from "react-flow-renderer";
import { TotalContext } from "../context/TotalContext";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { StockContext } from "../context/StockContext";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ProveedorContext } from "../context/ProveedorContext";
import { VtaVdeContext } from "../context/VtaVdeContext";
import { useEffect } from "react";
import { DateContext } from "../context/DateContext";
import { useState } from "react";




export const Diagrams = () => {

  
  const {
    totalcount,
    reservasok,
    reservaspendientes,
    pendientesproveedor,
    prendientesbodegas,
  } = useContext(TotalContext);
  
  const {
    reservasresctadas,
    reservasresctadashoy,
    reservasresctadasmanana,
    reservasinfopendientes,
    reservaspdtescambiofecha,
    reservapdteredespacho,
  } = useContext(StockContext);
  
  const { rescatadas, informadaspedtes } = useContext(ProveedorContext);
  // const { bloqueadas, conredespacho } = useContext(VtaVdeContext);
  const { stockbloqueadas, conredespacho, nuevafecha, provbloqueadas } =
  useContext(VtaVdeContext);

  const {date} = useContext(DateContext);
  const [spinner, setSpinner] = useState(false);
  
  useEffect(()=> {
    setSpinner(s => !s);
    // console.log(totalcount,date);
  }, [date, totalcount])

  const elements = [
    {
      id: "horizontal-1",
      sourcePosition: "right",
      // type: 'input',
      className: "dark-node",
      data: {
        label: (
          <>
            Reservas confirmadas <br />
            {totalcount ? (
              totalcount
            ) : (
              <Loader
                type="Puff"
                color="#00BFFF"
                height={25}
                width={25}
                timeout={60000} //3 secs
              />
            )}
          </>
        ),
      },
      position: { x: 30, y: 180 },
      draggable: false,
      style: {
        background: '#e1f5fe',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-2",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas ok <br />{" "}
            <p>
              {reservasok ? (
                reservasok
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 280, y: 100 },
      draggable: false,
      style: {
        background: '#e1f5fe',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-3",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas Pendientes{" "}
            <p>
              {reservaspendientes ? (
                reservaspendientes
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 280, y: 260 },
      style: {
        background: '#e1f5fe',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    // {
    //   id: 'horizontal-4',
    //   sourcePosition: 'right',
    //   targetPosition: 'left',
    //   data: { label: 'Node 4' },
    //   position: { x: 700, y: 100 },
    // },
    {
      id: "horizontal-5",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Pendiente Proveedor
            <p>
              {pendientesproveedor ? (
                pendientesproveedor
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 550, y: 150 },
      style: {
        background: '#e1f5fe',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-6",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Pendiente Bodega
            <p className="numero">
              {prendientesbodegas ? (
                prendientesbodegas
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 550, y: 330 },
      style: {
        background: '#e1f5fe',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-7",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas rescatadas
            <p>
              {rescatadas ? (
                rescatadas
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 850, y: 70 },
      style: {
        background: '#f9fbe7',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      
      id: "horizontal-8",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Rescatadas despacho en el dia
            <p>
              {reservasresctadashoy ? (
                reservasresctadashoy
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 1100, y: 250 },
      style: {
        background: '#f9fbe7',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-9",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Rescatadas despacho dia siguiente
            <p>
              {reservasresctadasmanana ? (
                reservasresctadasmanana
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 1100, y: 350 },
      style: {
        background: '#f9fbe7',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-19",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas rescatadas{" "}
            <p>
              {reservasresctadas ? (
                reservasresctadas
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 850, y: 300 },
      style: {
        background: '#f9fbe7',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-20",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas informadas como pendientes{" "}
            <p>
              {reservasinfopendientes ? (
                reservasinfopendientes
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={20}
                  width={20}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 850, y: 440 },
      style: {
        background: '#f9fbe7',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-21",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Pendiente cambio de fecha{" "}
            <p>
              {reservaspdtescambiofecha ? (
                reservaspdtescambiofecha
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={20}
                  width={20}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 1100, y: 450 },
      style: {
        background: '#f9fbe7',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-22",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Pendiente redespacho{" "}
            <p>
              {reservapdteredespacho ? (
                reservapdteredespacho
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={20}
                  width={20}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 1100, y: 550 },
      style: {
        background: '#f9fbe7',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-23",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas bloqueadas stock{" "}
            <p>
              {stockbloqueadas ? (
                stockbloqueadas
              ) : (
                <Loader
                  type="Puff"
                  color="#80d8ff"
                  height={20}
                  width={20}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 1400, y: 380 },
      style: {
        background: '#f3e5f5',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-24",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas con Redespacho{" "}
            <p>
              {conredespacho ? (
                conredespacho
              ) : (
                <Loader
                  type="Puff"
                  color="#80d8ff"
                  height={20}
                  width={20}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 1400, y: 500 },
      style: {
        background: "#f3e5f5",
        color: "#333",
        border: "1px solid #222138",
        width: 180,
      },
    },
    {
      id: "horizontal-25",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas informadas como pendientes{" "}
            <p>
              {informadaspedtes ? (
                informadaspedtes
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={20}
                  width={20}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 850, y: 190 },
      style: {
        background: '#f9fbe7',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    },
    {
      id: "horizontal-26",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas bloqueadas{" "}
            <p>
              {provbloqueadas ? (
                provbloqueadas
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={20}
                  width={20}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 1400, y: 200 },
      style: {
        background: "#f3e5f5",
        color: "#333",
        border: "1px solid #222138",
        width: 180,
      },
    },
    {
      id: "horizontal-27",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <>
            Reservas con nuevas fechas{" "}
            <p>
              {nuevafecha ? (
                nuevafecha
              ) : (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={20}
                  width={20}
                  timeout={60000} //3 secs
                />
              )}
            </p>
          </>
        ),
      },
      position: { x: 1400, y: 100 },
      style: {
        background: "#f3e5f5",
        color: "#333",
        border: "1px solid #222138",
        width: 180,
      },
    },

    {
      id: "horizontal-e1-2",
      source: "horizontal-1",
      type: "smoothstep",
      target: "horizontal-2",
      animated: true,
    },
    {
      id: "horizontal-e1-3",
      source: "horizontal-1",
      type: "smoothstep",
      target: "horizontal-3",
      animated: true,
    },
    // {
    //   id: 'horizontal-e1-4',
    //   source: 'horizontal-2',
    //   type: 'smoothstep',
    //   target: 'horizontal-4',
    //   label: 'edge label',
    // },
    {
      id: "horizontal-e3-5",
      source: "horizontal-3",
      type: "smoothstep",
      target: "horizontal-5",
      animated: true,
    },
    {
      id: "horizontal-e3-6",
      source: "horizontal-3",
      type: "smoothstep",
      target: "horizontal-6",
      animated: true,
    },
    {
      id: "horizontal-e5-7",
      source: "horizontal-5",
      type: "smoothstep",
      target: "horizontal-7",
      animated: true,
    },
    {
      id: "horizontal-e5-25",
      source: "horizontal-5",
      type: "smoothstep",
      target: "horizontal-25",
      animated: true,
    },
    {
      id: "horizontal-e25-26",
      source: "horizontal-25",
      type: "smoothstep",
      target: "horizontal-26",
      animated: true,
    },
    {
      id: "horizontal-e25-27",
      source: "horizontal-25",
      type: "smoothstep",
      target: "horizontal-27",
      animated: true,
    },
    {
      id: "horizontal-e19-8",
      source: "horizontal-19",
      type: "smoothstep",
      target: "horizontal-8",
      animated: true,
    },
    {
      id: "horizontal-e19-9",
      source: "horizontal-19",
      type: "smoothstep",
      target: "horizontal-9",
      animated: true,
    },
    {
      id: "horizontal-e20-21",
      source: "horizontal-20",
      type: "smoothstep",
      target: "horizontal-21",
      animated: true,
    },
    {
      id: "horizontal-e20-22",
      source: "horizontal-20",
      type: "smoothstep",
      target: "horizontal-22",
      animated: true,
    },
    {
      id: "horizontal-e22-23",
      source: "horizontal-22",
      type: "smoothstep",
      target: "horizontal-23",
      animated: true,
    },
    {
      id: "horizontal-e22-24",
      source: "horizontal-22",
      type: "smoothstep",
      target: "horizontal-24",
      animated: true,
    },
    {
      id: "horizontal-e6-20",
      source: "horizontal-6",
      type: "smoothstep",
      target: "horizontal-20",
      animated: true,
    },
    {
      id: "horizontal-e6-19",
      source: "horizontal-6",
      type: "smoothstep",
      target: "horizontal-19",
      animated: true,
    },
  ];

  return (
    <>
      <div style={{ height: 670, width: "100%" }}>
        <ReactFlow
          elements={elements}
          zoomOnScroll={true}
          className="react-flow"
        >
          {/* <Background variant="lines" gap={200} size={1}/> */}
          {/* <Background variant="lines" gap={100} size={1} style={{height:'100%'}} /> */}
        </ReactFlow>
        {spinner ? <Loader
            type="Grid"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={65000} //3 secs
          /> : (
          null
        )}
      </div>
    </>
  );
};

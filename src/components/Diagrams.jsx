import React from "react";
import ReactFlow from "react-flow-renderer";



export const Diagrams = () => {


  const elements = [
    {
      id: 'horizontal-1',
      sourcePosition: 'right',
      // type: 'input',
      className: 'dark-node',
      data: { label: <>Reservas confirmadas <br /><p>12.202</p></> },
      position: { x: 30, y: 180 },
      draggable: false
    },
    {
      id: 'horizontal-2',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Reservas ok' },
      position: { x: 210, y: 100 },
      draggable: false
    },
    {
      id: 'horizontal-3',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Reservas Pendientes' },
      position: { x: 210, y: 260 },
    },
    // {
    //   id: 'horizontal-4',
    //   sourcePosition: 'right',
    //   targetPosition: 'left',
    //   data: { label: 'Node 4' },
    //   position: { x: 700, y: 100 },
    // },
    {
      id: 'horizontal-5',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Pendientes Proveedor' },
      position: { x: 380, y: 200 },
    },
    {
      id: 'horizontal-6',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Pendientes Bodega' },
      position: { x: 380, y: 330 },
    },
    {
      id: 'horizontal-7',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Node 7' },
      position: { x: 550, y: 150 },
    },
    {
      id: 'horizontal-8',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: '8' },
      position: { x: 750, y: 270 },
    },
    {
      id: 'horizontal-9',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: '9' },
      position: { x: 750, y: 330 },
    },
    {
      id: 'horizontal-19',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Reservas rescatadas19' },
      position: { x: 580, y: 300 },
    },
    {
      id: 'horizontal-20',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Reservas informadas como pendientes' },
      position: { x: 580, y: 400 },
    },
    {
      id: 'horizontal-21',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: '21' },
      position: { x: 750, y: 400 },
    },
    {
      id: 'horizontal-22',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: '22' },
      position: { x: 750, y: 450 },
    },
    {
      id: 'horizontal-23',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: '23' },
      position: { x: 950, y: 380 },
    },
    {
      id: 'horizontal-24',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: '24' },
      position: { x: 950, y: 450 },
    },
  
    {
      id: 'horizontal-e1-2',
      source: 'horizontal-1',
      type: 'smoothstep',
      target: 'horizontal-2',
      animated: true,
    },
    {
      id: 'horizontal-e1-3',
      source: 'horizontal-1',
      type: 'smoothstep',
      target: 'horizontal-3',
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
      id: 'horizontal-e3-5',
      source: 'horizontal-3',
      type: 'smoothstep',
      target: 'horizontal-5',
      animated: true,
    },
    {
      id: 'horizontal-e3-6',
      source: 'horizontal-3',
      type: 'smoothstep',
      target: 'horizontal-6',
      animated: true,
    },
    {
      id: 'horizontal-e5-7',
      source: 'horizontal-5',
      type: 'smoothstep',
      target: 'horizontal-7',
      animated: true,
    },
    {
      id: 'horizontal-e19-8',
      source: 'horizontal-19',
      type: 'smoothstep',
      target: 'horizontal-8',
      animated: true,
    },
    {
      id: 'horizontal-e19-9',
      source: 'horizontal-19',
      type: 'smoothstep',
      target: 'horizontal-9',
      animated: true,
    },
    {
      id: 'horizontal-e20-21',
      source: 'horizontal-20',
      type: 'smoothstep',
      target: 'horizontal-21',
      animated: true,
    },
    {
      id: 'horizontal-e20-22',
      source: 'horizontal-20',
      type: 'smoothstep',
      target: 'horizontal-22',
      animated: true,
    },
    {
      id: 'horizontal-e22-23',
      source: 'horizontal-22',
      type: 'smoothstep',
      target: 'horizontal-23',
      animated: true,
    },
    {
      id: 'horizontal-e22-24',
      source: 'horizontal-22',
      type: 'smoothstep',
      target: 'horizontal-24',
      animated: true,
    },
    {
      id: 'horizontal-e6-20',
      source: 'horizontal-6',
      type: 'smoothstep',
      target: 'horizontal-20',
      animated: true,
    },
    {
      id: 'horizontal-e6-19',
      source: 'horizontal-6',
      type: 'smoothstep',
      target: 'horizontal-19',
      animated: true,
    },
  ];

  return (
   <>
     <div style={{  height: 1280, width: '100%' }}>
      <ReactFlow elements={elements} zoomOnScroll={true} className="react-flow" >
        {/* <Background variant="lines" gap={200} size={1}/> */}
        {/* <Background variant="lines" gap={100} size={1} style={{height:'100%'}} /> */}
      </ReactFlow>
    </div>
   </>
  );
};

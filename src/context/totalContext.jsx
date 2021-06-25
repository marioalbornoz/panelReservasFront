import React, { useState } from "react";
import { createContext } from "react";

export const totalContext = createContext();

const totalProvider = (props) => {
  const [totalcount, guardarTotalcount] = useState(0);
  return (
    <totalContext.Provider value={{ totalcount, guardarTotalcount }}>
      {props.children}
    </totalContext.Provider>
  );
};

export default totalProvider;

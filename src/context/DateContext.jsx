// import axios from "axios";
import React, { useState,createContext, useEffect } from "react";
// import Config from "../utils/Config";

export const DateContext = createContext();

const DateProvider = (props) => {

    const [value] = useState(new Date());
    const [date, setDate] = useState();
    // const [actualizar, setActualizar] = useState(false);

  // ejecutar llamado a la api
  useEffect(() => {
    setDate(
      `${value.getFullYear()}-${
        value.getMonth() + 1 < 10
          ? `0${value.getMonth() + 1}`
          : value.getMonth() + 1
      }-${value.getDate()}`
    );
    // setActualizar(true);
  }, [value]);

  // const actualizarFecha = () => {
    
  // }
  return (
    <DateContext.Provider
      value={{
        date,
        setDate
      }}
    >
      {props.children}
    </DateContext.Provider>
  );
};

export default DateProvider;
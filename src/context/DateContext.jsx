// import axios from "axios";
// import { CronJob } from "cron";
import React, { useState,createContext, useEffect } from "react";
// import Config from "../utils/Config";

export const DateContext = createContext();

const DateProvider = (props) => {

    const [value, setValue] = useState(new Date());
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
    setTimeout(() => {
      console.log(`se actualizo date`);
      setValue(new Date())
    }, 36000000);
    // setActualizar(true);
  }, [value]);

  // const jobDate = new CronJob({
  //   cronTime: `0 */1 * * *`,
  //   onTick: () => {
  //     console.log(`CRON execute for change date`);
  //     setValue(new Date());
  //   },
  //   runOnInit: true,
  //   start: false,
  //   timeZone: "America/Santiago",
  // });
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
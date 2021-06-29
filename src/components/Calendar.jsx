// import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
// import Config from '../utils/Config';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { DateContext } from '../context/DateContext';



function Calendar() {

  const {date, setDate} = useContext(DateContext)
  const [value] = useState(new Date());
  // const [date, setDate] = useState();

  // useEffect(()=>{
  //   console.log(`${`${value.getFullYear()}-${value.getMonth()+1 < 10 ? `0${value.getMonth()+1}` : value.getMonth()+1 }-${value.getUTCDate()}`} desde el useEffect inicial`);
  //   const enviarDate = async () =>{
  //       try {
  //         const res = await axios(`${Config.urlBase}ok/${`${value.getFullYear()}-${value.getMonth()+1 < 10 ? `0${value.getMonth()+1}` : value.getMonth()+1 }-${value.getUTCDate()}`}`);
  //         console.log(`respuesta desde reservas ok`,res.data.total);
  //       } catch (error) {
  //         if(error.status !== 401){
  //           console.log(`Error al enviar la fecha`);
  //         }
  //       }
  //   } 
  //   enviarDate();
  // }, [value])

  useEffect(()=>{
    console.log(`${date} desde el useEffect`);
    // const enviarDate = async () =>{
    //     try {
    //       const res = await axios(`${Config.urlBase}ok/${date}`);
    //       console.log(res.data.total);
    //     } catch (error) {
    //       if(error.status !== 401){
    //         console.log(`Error al enviar la fecha`);
    //       }
    //     }
    // } 
    // enviarDate();
  }, [date])

  const handleChange = (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log(e.target.value);
    setDate(e.target.value)
    console.log(`${date}`);
    console.log('====================================');
  }

  return (
    <div className="card col s3 yellow lighten-4 calendar">
      <form className="input-field ">
        <p>
          <input
            type="date"
            name="fechacita"
            min="2010-02-20"
            max={`${value.getFullYear()}-${value.getMonth()+1 < 10 ? `0${value.getMonth()+1}` : value.getMonth()+1 }-${value.getUTCDate()}`}
            onChange={handleChange}
            className="validate"
          />
        </p>
      </form>
    </div>
  );
}
export default Calendar;
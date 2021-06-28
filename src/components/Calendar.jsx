import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Config from '../utils/Config';



function Calendar() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState();

  useEffect(()=>{
    console.log(`${date} desde el useEffect`);
    const enviarDate = async () =>{
        try {
          const res = await axios(`${Config.urlBase}ok/${date}`);
          console.log(res.data.date);
        } catch (error) {
          if(error.status !== 401){
            console.log(`Error al enviar la fecha`);
          }
        }
    } 
    enviarDate();
  }, [date])

  const handleChange = (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log(e.target.value);
    setDate(e.target.value)
    console.log(`${value.getFullYear()}-${value.getMonth()+1 < 10 ? `0${value.getMonth()+1}` : value.getMonth()+1 }-${value.getUTCDate() }`);
    console.log('====================================');
  }

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
  }

  return (
    <div className="card col s3 yellow accent-3">
      <form className="input-field">
        <p>
          <input
            type="date"
            name="fechacita"
            min="2010-02-20"
            max={`${value.getFullYear()}-${value.getMonth()+1 < 10 ? `0${value.getMonth()+1}` : value.getMonth()+1 }-${value.getUTCDate() -1 }`}
            onChange={handleChange}
            className="validate"
          />
        </p>
      </form>
    </div>
  );
}
export default Calendar;
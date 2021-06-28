import React, { useState } from 'react';



function Calendar() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState();

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
    <div className="card col s5 yellow accent-3">
      <form className="input-field">
        <p>
          <input
            type="date"
            name="fechacita"
            min="2010-02-20"
            max={`${value.getFullYear()}-${value.getMonth()+1 < 10 ? `0${value.getMonth()+1}` : value.getMonth()+1 }-${value.getUTCDate() }`}
            onChange={handleChange}
            className="validate"
          />
        </p>
      </form>
    </div>
  );
}
export default Calendar;
import React from "react";
import "./weather.style.css";
const Weather = props => {
  console.log(props.weatherIcon);
  let g='  ';

  return (
    <div className="container text-light">
      <div className="Card">
        <h2 className="text-white py-3" >{props.cityname}</h2>
        <div className="hh">
          <h1 className="py-2">
          <i className="gg"> {props.weatherIcon} </i>
          </h1>
        </div>
       
          <div className="gf">
          {props.temp_celsius ? (
            <h1 className="py-2">Current Temperature: {props.temp_celsius}&deg;</h1>
          ) : null}
           
          {maxminTemp(props.temp_min, props.temp_max)}
  
          {props.description ? (
  
          <h3 className="py-3"> Weather:{g}  
            {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}
          </h3>):null}
          </div>
        </div>
      </div>
  
      
  );
            }

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <div>
        <span className="px-4">Minimum Temperature:  {min}&deg;</span>
        <span className="px-4">maximum Temperature: {max}&deg;</span>
      </div>
    );
  }
}

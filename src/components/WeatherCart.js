import React from 'react';
/*
  todo: props { ville: "rabat", status:"clear", hello: alertHello}
*/

function WeatherCart(props) {
  console.log(props);

  if (props.error) {
    return <h1 style={{ color: 'red' }}> {props.error}</h1>;
  }
  return (
    <div className="weather-cart">
      {props?.data && (
        <div>
          <h1> {Math.ceil(props.data?.main.temp - 273.15)} °</h1>
          <img
            src={`https://openweathermap.org/img/w/${props.data?.weather[0].icon}.png`}
            alt=""
          />
          <p className="status"> {props.data?.weather[0].main} </p>
          <h2>
            {props.data.name}, {props.data?.sys.country}
          </h2>
          <button> sbve to favarorites</button>
        </div>
      )}
    </div>
  );
}

export default WeatherCart;

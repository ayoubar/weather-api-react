import React from 'react';
/*
  todo: props { ville: "rabat", status:"clear", hello: alertHello}
*/

const buttonSave = {
  border: 'none',
  padding: '.4rem',
  backgroundColor: '#00FF00',
  color: '#000',
  fontWeight: 'bold',
  borderRadius: '10px',
  cursor: 'pointer',
};

const buttonDelete = {
  ...buttonSave,
  backgroundColor: 'red',
};

function WeatherCart(props) {
  console.log(props);

  function saveCityToLocalStorage() {
    // debugger;
    // todo : verifier si la clé est existe
    if (!localStorage.getItem('cities')) {
      localStorage.setItem('cities', JSON.stringify([]));
      // crée la clé vities , sa valeur par defaut est un tableau vide
    }

    // todo instruction1
    let cities = JSON.parse(localStorage.getItem('cities'));

    // ? instruction2
    cities.push(props.data.name);

    cities = [...new Set(cities)];
    // ! instruction3
    // mis a jour la valeur de la clé `cities`
    localStorage.setItem('cities', JSON.stringify(cities));
    props.addCityToFavourite(props.data.name);
  }

  if (props.error) {
    return <h1 style={{ color: 'red' }}> {props.error}</h1>;
  }
  return (
    <div className="weather-cart">
      {props?.data && (
        <div>
          <h1> {Math.ceil(props.data.main.temp - 273.15)} °</h1>
          <img
            src={`https://openweathermap.org/img/w/${props.data?.weather[0].icon}.png`}
            alt=""
          />
          <p className="status"> {props.data?.weather[0].main} </p>
          <h2>
            {props.data.name}, {props.data?.sys.country}
          </h2>

          {props.favourites.includes(props.data.name) ? (
            <button style={buttonDelete} onClick={saveCityToLocalStorage}>
              {' '}
              delete from favourite{' '}
            </button>
          ) : (
            <button style={buttonSave} onClick={saveCityToLocalStorage}>
              save to favourites
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherCart;

import React from 'react';
import Button from './Button';

const container = {
  padding: '1.3rem',
  display: 'flex',
  justifyContent: 'center',
};

function FavouriteCity(props) {
  return (
    <div style={container}>
      {props.favourites.map((element, index) => (
        <Button
          key={index}
          title={element}
          getWeatherByCity={props.getWeatherByCity}
        />
      ))}
    </div>
  );
}

export default FavouriteCity;

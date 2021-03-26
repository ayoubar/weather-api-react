import React from 'react';

function Button(props) {
  function onclickButton() {
    props.getWeatherByCity(props.title);
  }

  return <button onClick={onclickButton}> {props.title} </button>;
}

export default Button;

import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCart from './components/WeatherCart';

const container = {
  height: '100vh',
  background: 'black',
  color: 'white',
};

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setData] = useState(null);
  const [error, setError] = useState(null);

  function getWeatherByCity(city) {
    // appel API

    async function getData() {
      const cle_api = process.env.REACT_APP_WEATHER_API_KEY;
      const api_url = `${BASE_URL}/?q=${city}&appid=${cle_api}`;

      const reponse = await fetch(api_url);

      if (!reponse.ok) {
        throw new Error('Erroor');
      }
      const data = await reponse.json();
      return data;
    }

    getData()
      .then((data) => {
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setError('error');
      });
  }

  // todo: dans la variable `data` on stock les données qu'on va recevoir depuis l'API
  /*
     * Etape 1
      todo: crée une fonction asynchrone appelé `getWeatherByCity` qui prendr un parametre `city`
      todo: declarer une variable global appelé `URL_API` qui contitent l'url de l'API principal
      todo: crée le fichier `.env.local`
      todo: crée une variable d'env appelé REACT_APP_WEATHER_API_KEY
  */
  console.log('API KEY', process.env.REACT_APP_WEATHER_API_KEY);
  return (
    <>
      <SearchBar test={''} recuperezDataparVille={getWeatherByCity} />
      <WeatherCart data={weatherData} error={error} />
    </>
  );
}

export default App;

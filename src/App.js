import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCart from './components/WeatherCart';
import FavouriteCity from './components/FavouriteCity';
const container = {
  height: '100vh',
  background: 'black',
  color: 'white',
};

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setData] = useState(null);
  const [error, setError] = useState(null);
  const [favouritecities, setFavouriteCities] = useState([]);

  useEffect(() => {
    // verifier si la clé cities existe
    if (localStorage.getItem('cities')) {
      setFavouriteCities(JSON.parse(localStorage.getItem('cities')));
    }
  }, []);

  async function getWeatherByCity(city) {
    // appel API

    // async function getData() {
    const cle_api = process.env.REACT_APP_WEATHER_API_KEY;
    const api_url = `${BASE_URL}/?q=${city}&appid=${cle_api}`;

    const reponse = await fetch(api_url);
    console.log(reponse);
    if (!reponse.ok) {
      // throw new Error('Erroor');
      setError('city not found');
    } else {
      setError(null);
      const data = await reponse.json();
      setData(data);
    }
  }

  function addCityToFavourite(city) {
    setFavouriteCities([...favouritecities, city]);
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
      <WeatherCart
        data={weatherData}
        error={error}
        addCityToFavourite={addCityToFavourite}
        favourites={favouritecities}
      />
      <FavouriteCity
        favourites={favouritecities}
        getWeatherByCity={getWeatherByCity}
      />
    </>
  );
}

export default App;

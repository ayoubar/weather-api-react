import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCart from './components/WeatherCart';

const container = {
  height: '100vh',
  background: 'black',
  color: 'white',
};

function App() {
  return (
    <>
      <SearchBar />
      <WeatherCart />
    </>
  );
}

export default App;

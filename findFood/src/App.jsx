import { useState } from 'react';
import RestaurantList from './components/RestaurantList/RestaurantList';
import SearchBar from './components/SearchBar/SearchBar';
import EmptyList from './components/ErrorPage/EmptyList';
import Loading from './components/Loading/Loading';
import { fetchRestaurants } from './services/restaurantService';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (postcode) => {
    setHasSearched(true);
    setLoading(true);

    try {
      const data = await fetchRestaurants(postcode);
      setRestaurants(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading ? <Loading /> : <RestaurantList restaurants={restaurants} />}
      {hasSearched && !loading && restaurants.length === 0 && <EmptyList />}
    </div>
  );
}


export default App;

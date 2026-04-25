import { useState } from 'react';
import RestaurantList from './components/RestaurantList/RestaurantList';
import SearchBar from './components/SearchBar/SearchBar';
import EmptyList from './components/ErrorPage/EmptyList';
import { fetchRestaurants } from './services/restaurantService';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (postcode) => {
    setHasSearched(true);

    try {
      const data = await fetchRestaurants(postcode);
      setRestaurants(data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RestaurantList restaurants={restaurants} />
      {hasSearched && restaurants.length === 0 && <EmptyList />}
    </div>
  );
}

export default App;

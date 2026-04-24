import { useState } from 'react';
import RestaurantList from './components/RestaurantList';
import SearchBar from './components/SearchBar';
import { fetchRestaurants } from './services/restaurantService';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  const handleSearch = async (postcode) => {
    try {
      const data = await fetchRestaurants(postcode);
      setRestaurants(data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div className="App">
      <h1>Search Restaurants</h1>
      <SearchBar onSearch={handleSearch} />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import RestaurantList from './components/RestaurantList/RestaurantList';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchRestaurants } from './services/restaurantService';
import './App.css';
import Header from './components/Header/Header';

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
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default App;

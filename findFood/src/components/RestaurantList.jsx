import { useState, useEffect } from "react";
import { fetchRestaurants } from "../services/restaurantService";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      const data = await fetchRestaurants();
      setRestaurants(data);
    };

    loadRestaurants();
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <div>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>{restaurant.name}</div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

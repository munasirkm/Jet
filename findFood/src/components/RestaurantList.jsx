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
          <div key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Cuisines: {restaurant.cuisines}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

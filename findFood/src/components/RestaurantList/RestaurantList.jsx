import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx';
import './RestaurantList.css';
const RestaurantList = ({ restaurants = [] }) => {
  return (
    <div className="restaurant-list-wrapper">

      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
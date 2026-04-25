const RestaurantList = ({ restaurants = [] }) => {

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

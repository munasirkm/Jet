import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="card-content">
            <div className="card-header">
                <h3 className="card-title">{restaurant.name}</h3>
                <div className="card-rating">
                    <span className="star">★</span>
                    {restaurant.rating}
                </div>
            </div>

            <p className="card-cuisines">{restaurant.cuisines}</p>

            <div className="card-footer">
                <span className="card-address">{restaurant.address}</span>

            </div>
        </div>
    )
}

export default RestaurantCard

export function transformRestaurantData(restaurants) {
    return restaurants.map((restaurant) => ({
        id: restaurant.id,
        name: restaurant.name,
        address: `${restaurant.address?.firstLine ?? ''}, ${restaurant.address?.city ?? ''}, ${restaurant.address?.postalCode ?? ''}`.replace(/(^[\s,]+|[\s,]+$)/g, ''),
        rating: restaurant.rating?.count ? restaurant.rating.starRating : 'N.A.',
        cuisines: restaurant.cuisines?.length > 0
            ? restaurant.cuisines.map((c) => c.name).join(', ')
            : 'None',
    }));
}

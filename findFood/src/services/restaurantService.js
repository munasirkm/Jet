import { transformRestaurantData } from '../utils/dataTransforms.js';

const NO_OF_RESULTS = 10;

export async function fetchRestaurants(postcode) {
    try {
        const res = await fetch(`/api/${postcode}`);
        const data = await res.json();
        return transformRestaurantData(data.restaurants.slice(0, NO_OF_RESULTS));
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
}
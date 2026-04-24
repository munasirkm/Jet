import { transformRestaurantData } from '../utils/dataTransforms.js';

export async function fetchRestaurants() {
    try {
        const res = await fetch('/api/BN11AE');
        const data = await res.json();
        return transformRestaurantData(data.restaurants.slice(0, 10));
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
}
export async function fetchRestaurants() {
    try {
        const res = await fetch('/api/BN11AE');
        const data = await res.json()
        return data.restaurants.slice(0, 10);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
}
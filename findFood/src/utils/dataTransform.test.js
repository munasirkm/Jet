import { describe, it, expect } from 'vitest'
import { transformRestaurantData } from './dataTransforms'

const baseRestaurant = {
    id: '1',
    name: 'Test Restaurant',
    address: {
        firstLine: '123 Test St',
        city: 'Testville',
        postalCode: '12345',
    },
    rating: {
        starRating: 4.5,
        count: 100,
    },
    cuisines: [
        { name: 'Italian' },
        { name: 'Pizza' },
    ],
}

describe('transformRestaurantData', () => {
    it('restaurant data with complete data', () => {
        const input = [baseRestaurant]
        const result = transformRestaurantData(input)
        expect(result).toHaveLength(1)
        expect(result[0]).toEqual({
            id: '1',
            name: 'Test Restaurant',
            address: '123 Test St, Testville, 12345',
            rating: 4.5,
            cuisines: 'Italian, Pizza',
        })
    })

    it('missing address fields', () => {
        const input = [
            {
                ...baseRestaurant,
                address: {
                    firstLine: '456 Main Ave',
                }
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].address).toBe('456 Main Ave')
    })
    it('missing address firstline', () => {
        const input = [
            {
                ...baseRestaurant,
                address: {
                    city: 'London',
                    postalCode: '12345',
                },
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].address).toBe('London, 12345')
    })
    it('empty address', () => {
        const input = [
            {
                ...baseRestaurant,
                address: {},
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].address).toBe('')
    })
    it('return N.A. rating when count is 0', () => {
        const input = [
            {
                ...baseRestaurant,
                rating: {
                    starRating: 5.0,
                    count: 0,
                },
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].rating).toBe('N.A.')
    })

    it('return None for empty cuisines', () => {
        const input = [
            {
                ...baseRestaurant,
                cuisines: [],
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].cuisines).toBe('None')
    })

    it('empty restaurants array', () => {
        const input = []
        const result = transformRestaurantData(input)
        expect(result).toEqual([])
    })

    it('multiple restaurants', () => {
        const input = [baseRestaurant, baseRestaurant]
        const result = transformRestaurantData(input)
        expect(result).toHaveLength(2)
    })

    it('missing rating', () => {
        const input = [
            {
                ...baseRestaurant,
                rating: {
                    starRating: 0,
                    count: 0,
                },
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].rating).toBe('N.A.')
    })
})

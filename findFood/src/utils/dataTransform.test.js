import { describe, it, expect } from 'vitest'
import { transformRestaurantData } from './dataTransforms'

describe('transformRestaurantData', () => {
    it('restaurant data with complete data', () => {
        const input = [
            {
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
            },
        ]
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
                id: '2',
                name: 'Minimal Restaurant',
                address: {
                    firstLine: '456 Main Ave',
                },
                rating: {
                    starRating: 3.0,
                    count: 50,
                },
                cuisines: [{ name: 'Chinese' }],
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].address).toBe('456 Main Ave')
    })
    it('missing address firstline', () => {
        const input = [
            {
                id: '2',
                name: 'Minimal Restaurant',
                address: {
                    city: 'London',
                    postalCode: '12345',
                },
                rating: {
                    starRating: 3.0,
                    count: 50,
                },
                cuisines: [{ name: 'Chinese' }],
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].address).toBe('London, 12345')
    })
    it('empty address', () => {
        const input = [
            {
                id: '2',
                name: 'Minimal Restaurant',
                address: {
                    
                },
                rating: {
                    starRating: 3.0,
                    count: 50,
                },
                cuisines: [{ name: 'Chinese' }],
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].address).toBe('')
    })
    it('return N.A. rating when count is 0', () => {
        const input = [
            {
                id: '3',
                name: 'New Restaurant',
                address: {
                    firstLine: '789 New St',
                    city: 'Newtown',
                    postalCode: '54321',
                },
                rating: {
                    starRating: 5.0,
                    count: 0,
                },
                cuisines: [],
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].rating).toBe('N.A.')
    })

    it('return None for empty cuisines', () => {
        const input = [
            {
                id: '4',
                name: 'Simple Place',
                address: {
                    firstLine: '321 Simple Ln',
                    city: 'Simple City',
                    postalCode: '11111',
                },
                rating: {
                    starRating: 3.5,
                    count: 25,
                },
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
        const input = [
            {
                id: '1',
                name: 'Restaurant A',
                address: {
                    firstLine: '1 A St',
                    city: 'City A',
                    postalCode: 'A1111',
                },
                rating: {
                    starRating: 4.0,
                    count: 80,
                },
                cuisines: [{ name: 'Thai' }],
            },
            {
                id: '2',
                name: 'Restaurant B',
                address: {
                    firstLine: '2 B St',
                    city: 'City B',
                    postalCode: 'B2222',
                },
                rating: {
                    starRating: 3.8,
                    count: 60,
                },
                cuisines: [{ name: 'Japanese' }, { name: 'Sushi' }],
            },
        ]
        const result = transformRestaurantData(input)
        expect(result).toHaveLength(2)
        expect(result[0].name).toBe('Restaurant A')
        expect(result[0].cuisines).toBe('Thai')
        expect(result[0].rating).toBe(4.0)
        expect(result[0].address).toBe('1 A St, City A, A1111')
        expect(result[1].name).toBe('Restaurant B')
        expect(result[1].cuisines).toBe('Japanese, Sushi')
        expect(result[1].rating).toBe(3.8)
        expect(result[1].address).toBe('2 B St, City B, B2222')
    })

    it('missing rating', () => {
        const input = [
            {
                id: '5',
                name: 'No Rating Restaurant',
                address: {
                    firstLine: '555 Hidden St',
                    city: 'Hidden City',
                    postalCode: '55555',
                },
                cuisines: [{ name: 'French' }],
            },
        ]
        const result = transformRestaurantData(input)
        expect(result[0].rating).toBe('N.A.')
    })
})

const { shuffleArray } = require('./utils')

describe('shuffleArray should', () => {
    it('results of shuffle array return same number of elements as its inputs', () => {
        const input = [5, 10, 15, 20, 25];
        const output = shuffleArray(input);
        expect(output.length).toEqual(input.length);
    });
});

describe('shoppinglist', () => {
    it('Check to see if eggs are still on the shopping list', () => {
        const listInput = [
            'bread',
            'eggs',
            'chocolate milk',
            'sliced cheese',
            'sliced meat',
            'orange juice'
        ]
        const shoppingList = shuffleArray(listInput);
            expect(shoppingList).toContain('eggs');
            expect(new Set(shoppingList)).toContain('eggs');
    });
    
});


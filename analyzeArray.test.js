const analyzeArray = require('./analyzeArray');

describe('Analyze Array', () => {
    describe('findMin', () => {
        it('should return the minimum value from the array', () => {
            const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
            const analysis = new analyzeArray(array);
            expect(analysis.findMin(array)).toBe(1);
        });

        it('should return undefined for an empty array', () => {
            const array = [];
            const analysis = new analyzeArray(array);
            expect(analysis.findMin(array)).toBeUndefined();
        });
    });

    describe('findMax', () => {
        it('should return the maximum value from the array', () => {
            const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
            const analysis = new analyzeArray(array);
            expect(analysis.findMax(array)).toBe(9);
        });

        it('should return undefined for an empty array', () => {
            const array = [];
            const analysis = new analyzeArray(array);
            expect(analysis.findMax(array)).toBeUndefined();
        });
    });

    describe('calculateAverage', () => {
        it('should return the average value of the array', () => {
            const array = [3, 1, 4, 1, 5]; // Provide a valid array here
            const analysis = new analyzeArray(array);
            expect(analysis.calculateAverage(array)).toBe(2.8);
        });

        it('should return undefined for an empty array', () => {
            const array = [];
            const analysis = new analyzeArray(array);
            expect(analysis.calculateAverage(array)).toBeUndefined();
        });
    });
});


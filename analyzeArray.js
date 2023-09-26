class analyzeArray {
    constructor(array) {
        this.min = this.findMin(array);
        this.max = this.findMax(array);
        this.length = array.length;
        this.average = this.calculateAverage(array);
    }

    findMin(array) {
        if (array.length === 0) return undefined;
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }

    findMax(array) {
        if (array.length === 0) return undefined;
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }

    calculateAverage(array) {
        if (array.length === 0) return undefined;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
}

module.exports = analyzeArray;

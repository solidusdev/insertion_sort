let sample_array = [44,10,63,88,3,105];

const insertion_sort = arr => {

    for(let i = 1; i < arr.length; i++) {
        for(let j = i; j > 0; j--) {
            if(arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
        }
    }

    return arr;
};

console.log(insertion_sort(sample_array));  // [ 3, 10, 44, 63, 88, 105 ]
//  TIME: O(n^2)
//  SPACE: O(1)

// Jest Unit Testing export function
module.exports = insertion_sort;
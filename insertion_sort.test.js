const insertion_sort = require("./insertion_sort");

test("array as arguement to be sorted", () => {
    const array_sample = [99,152,64,10];  // Unsorted
    expect(insertion_sort(array_sample)).toEqual([10,64,99,152]);
});
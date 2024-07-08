// 4. Find Maximum and Minimum Element in an Array

let arr = [1, 2, 3, 4, 5];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(`Max: ${max}, Min: ${min}`);

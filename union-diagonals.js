// Write a function that finds the union of 2 arrays.
// The union of 2 arrays is ALL elements that exist in the arrays, 
// with no duplicates. Think the total set of data in a venn diagram.

// EXAMPLE: 
// The union of:
// [1,3,4,7,9]
// [3,5,8,9,11]
// would be: [1,3,4,5,7,8,9,11]

function union(arr1, arr2) {
    let dict = {};
    let toReturn = [];
    for (var i = 0; i < arr1.length; i++) {
        dict[arr1[i]] = true;
        dict[arr2[i]] = true;
    }
    for (var [key] of Object.entries(dict)) {
        toReturn.push(key);
    }
    return toReturn;
}

console.log(union([1, 2, 3, 4, 5, 6], [2, 4, 6, 8, 10, 12]))

// Write a function that calculates the difference of
// diagonals of a 2D array.

// EXAMPLE:
// let arr = [[8,2,6],
//            [4,1,3],
//            [5,9,7]]

// Diagonal 1 sum: 8 + 1 + 7 = 16
// Diagonal 2 sum: 6 + 1 + 5 = 12

// Difference => |16-12| = 4


function diagDiff(arr) {
    let diag = 0;
    let backdiag = 0;

    for (var i = 0; i < arr.length; i++) {
        diag += arr[i][i];
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        backdiag += arr[i][i];
    }

    var diff = Math.abs(diag - backdiag);
    console.log(arr);
    console.log("|" + diag + " - " + backdiag + "| = " + diff);
    return diff;
}

diagDiff([[8, 0, 0, 0, 9], [0, 1, 0, 4, 0], [0, 0, 8982, 0, 0], [0, 2, 0, 4, 0], [4, 0, 0, 0, 6]])
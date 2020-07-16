// Write a function that finds the symmetric difference between
// two arrays. This means, looking back on our venn diagram explanation,
// the section of the venn diagrams EXCEPT FOR the intersection.

// EXAMPLE:
// [1,3,5,9]
// [1,2,5,8]

// difference -> [2,3,8,9]
function symDiff(arr1, arr2){
    var diff = [];
    var dict = {};
    for (var i = 0; i < arr1.length; i++) {
        dict[arr1[i]] = "arr1";
    }
    for (var j = 0; j < arr2.length; j++) {
        if (dict[arr2[j]] == undefined || dict[arr2[j]] == "arr2") {
            dict[arr2[j]] = "arr2";
        }
        else {
            dict[arr2[j]] = false;
        }
    }
    for (var [key, value] of Object.entries(dict)) {
        if (value != false) {
            diff.push(parseInt(key));
        }
    }
    return diff;
}
console.log(symDiff([1,3,3,5,9,8,1], [1,2,2,5,8]))

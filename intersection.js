// Write a function that takes 2 sorted arrays and finds the intersection of those arrays.
// The intersection is just a fancy term for the elements that are in both arrays.



function intersection(arr1, arr2) {
    var returnArr = [];
    var j = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[j]) {
            returnArr.push(arr1[i]);
            j++;
        }
        else if (arr1[i] > arr2[j]) {
            j++;
            i--;
        }
        //else if (arr1[i] < arr2[j]) {
            //i++;
            //i--;
        //}
    }
    return returnArr;
}

var arr1 = [0,1,3,4,6,100]
var arr2 = [6,7,8,10,13,100]
console.log(intersection(arr1, arr2));
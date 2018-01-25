function diffArray(arr1, arr2) {
    var newArr = [];
    function findDiff(firstArr, SecArr) {
        for (i = 0; i < firstArr.length; i++) {
            // console.log(SecArr.indexOf(firstArr[i]))
            if (SecArr.indexOf(firstArr[i]) === -1) {
                newArr.push(firstArr[i]);
            }
        }
    }
    findDiff(arr1, arr2);
    findDiff(arr2, arr1);

    return newArr;
}
// console.log(diffArray([1, 2, 3, 5,8,10], [1, 2, 3, 4, 5,8,9]));

function myReplace(str, before, after) {
var checkBefore = before.charAt(0);
checkAfter = after.charAt(0);
    if ( checkBefore == before.charAt(0).toUpperCase()) {
        checkAfter = after.charAt(0).toUpperCase();
        after = after.replace(after.charAt(0),checkAfter)
    }
    console.log(checkBefore.charAt(0))
    console.log(checkAfter.charAt(0))
    return str.replace(before, after);
}

console.log(myReplace("His name is Tom", "Tom", "john"))

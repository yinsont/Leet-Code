/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let ans = []
    let iterator = 0
    for (i of arr){
        ans.push(fn(i, iterator))
        iterator++
    }
    return ans
};
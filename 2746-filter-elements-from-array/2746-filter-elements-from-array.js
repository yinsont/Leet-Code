/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let ans = []
    let iterator = 0
    for (i of arr){
        if (fn(i, iterator)){
            ans.push(i)
        }
        iterator++
    }
    return ans
};
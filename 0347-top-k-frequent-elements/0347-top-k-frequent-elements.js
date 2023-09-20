/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let ans = []
    let numbers = {}
    for (let num of nums) {
        numbers[num] ? numbers[num] += 1 : numbers[num] = 1
    }
    
    while (k > 0){
        let max = 0
        let int = 0
        for (let key in numbers) {
            
            // console.log(numbers[key])
            if (numbers[key] > max){
                max = numbers[key]
                int = key
            } 
        }
        delete numbers[int]
        ans.push(int)
        k--
    }
    return ans
};
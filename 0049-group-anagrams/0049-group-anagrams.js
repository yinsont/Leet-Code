/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let letters = {}
    for (let str of strs) {
        let stringLetters = str.split('').sort().join('')
        
        letters[stringLetters] ? letters[stringLetters].push(str) : letters[stringLetters] = [str]
        
        //if lettersInString is a key in letters, push the string; else create a key of whatever lettersInString is with a value of the string in array
    }
    return Object.values(letters)
};
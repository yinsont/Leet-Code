/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    let arr = []
    let i = 0
    while (i < s.length){
        console.log(arr)
        switch(s[i]) {
            case '(':
                arr.push(')')
                break
            case '{':
                arr.push('}')
                break
            case '[':
                arr.push(']')
                break
                
            default:
                if (s[i] !== arr.pop()) return false
        }
        // console.log(arr)
        i+= 1
    }
    return !arr.length
};

    // for (let i = 0; i < s.length; i++){
    //     if (i % 2 !== 0) continue
    //     if (s[i] == '('){
    //         if (s[i + 1] !== ')'){
    //             return false
    //         }
    //     }
    //     if (s[i] == '{'){
    //         if (s[i + 1] !== '}'){
    //             return false
    //         }
    //     }
    //     if (s[i] == '['){
    //         if (s[i + 1] !== ']'){
    //             return false
    //         }
    //     }
    // }
    // return true

    // if (s.includes('(')) {
    //     if (s.includes(')')){
    //         return true
    //     }
    // }
    // if (s.includes('{')) {
    //     if (s.includes('}')){
    //         return true
    //     }
    // }
    // if (s.includes('[')) {
    //     if (s.includes(']')){
    //         return true
    //     }
    // }
    // return false
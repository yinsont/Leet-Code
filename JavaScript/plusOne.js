const plusOne = (digits) => {
    let number = ''
    // for (let i = digits.length - 1; i >= 0; i--) {
    for (let i = 0; i < digits.length; i++){
        // console.log(digits[i])
        number += digits[i]
    }
    return number = (parseInt(number) + 1).toString().split('')
}

console.log(plusOne([1,2,3]))
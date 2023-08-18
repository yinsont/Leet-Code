const isPalindrom = (x) => {
    x = x.toString().toLowerCase()
    for (let i = 0; i < x.length; i++){

        if (x[i] !== (x[x.length -1 -i])){
            return false
        }
    }
    return true
}

console.log(isPalindrom(121))
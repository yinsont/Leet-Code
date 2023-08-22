const isObjEmpty = (obj) => {
    for (key in obj) return false
    return true
}

console.log(isObjEmpty({key1: 'value1', key2: 3}))
console.log(isObjEmpty({}))
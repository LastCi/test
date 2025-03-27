function parse(str: string) {
    const store: string[] = []

    const arr = str.split('')
    const firstElement = arr.shift()

    if (arr.length === 0 || !firstElement) {
        return true
    }

    store.push(firstElement)

    for (let i of arr) {
        switch (i) {
            case ']': {
                if (store[store.length - 1] !== '[') {
                    return false
                    break
                }
                else {
                    store.pop()
                    break
                }
            }
            case ')': {
                if (store[store.length - 1] !== '(') {
                    return false
                    break
                }
                else {
                    store.pop()
                    break
                }
            }
            case '}': {
                if (store[store.length - 1] !== '{') {
                    return false
                    break
                }
                else {
                    store.pop()
                    break
                }
            }
            default: {
                store.push(i)
            }
        }

    }
    
    return store.length > 0 ? false : true
}

console.log(parse("))))"))
console.log(parse(""))
console.log(parse("((()"))
console.log(parse("((({[]})))"))
console.log(parse("({[)]}"))

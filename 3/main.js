function parse(str) {
    var store = [];
    var arr = str.split('');
    var firstElement = arr.shift();
    if (arr.length === 0 || !firstElement) {
        return true;
    }
    store.push(firstElement);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        switch (i) {
            case ']': {
                if (store[store.length - 1] !== '[') {
                    return false;
                    break;
                }
                else {
                    store.pop();
                    break;
                }
            }
            case ')': {
                if (store[store.length - 1] !== '(') {
                    return false;
                    break;
                }
                else {
                    store.pop();
                    break;
                }
            }
            case '}': {
                if (store[store.length - 1] !== '{') {
                    return false;
                    break;
                }
                else {
                    store.pop();
                    break;
                }
            }
            default: {
                store.push(i);
            }
        }
    }
    return store.length > 0 ? false : true;
}
console.log(parse("))))"));
console.log(parse(""));
console.log(parse("((()"));
console.log(parse("((({[]})))"));
console.log(parse("({[)]}"));

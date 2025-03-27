function deepCopy(obj) {
    var clone = Object.create(Object.getPrototypeOf(obj));
    for (var _i = 0, _a = Reflect.ownKeys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (typeof key !== 'symbol') {
            var value = obj[key];
            if (value instanceof Date) {
                clone[key] = new Date(value);
            }
            else if (value instanceof Map) {
                clone[key] = new Map(value);
            }
            else if (value instanceof Set) {
                clone[key] = new Set(value);
            }
            else if (typeof value === 'object') {
                clone[key] = deepCopy(value);
            }
            else {
                clone[key] = value;
            }
        }
    }
    return clone;
}


function deepCopy<T extends Record<string, any>>(obj: T): T {
    const clone = Object.create(Object.getPrototypeOf(obj));

    for (const key of Reflect.ownKeys(obj)) {
        if (typeof key !== 'symbol') {
            const value = obj[key];
        if (value instanceof Date) {
            clone[key] = new Date(value);
        } else if (value instanceof Map) {
            clone[key] = new Map(value);
        } else if (value instanceof Set) {
            clone[key] = new Set(value);
        } else if (typeof value === 'object') {
            clone[key] = deepCopy(value);
        } else {
            clone[key] = value;
        }
    }
    }
    return clone;
}

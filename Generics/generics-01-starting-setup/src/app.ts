// Code goes here!

function combine<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

let result = combine<{ name: string }, { age: number }>({ name: 'Ivo' }, { age: 30 });
console.log(result);

function getData<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

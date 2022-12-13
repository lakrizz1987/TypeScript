// Code goes here!

function combine<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

let result = combine<{ name: string }, { age: number }>({ name: 'Ivo' }, { age: 30 });
console.log(result);

function getData<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

const data = getData({ name: 'Pesho' }, 'name');
console.log(data);

class DataStorage<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    print() {
        
        return this.data
    }
}

const numbers = new DataStorage<string>;
//numbers.addItem(2)
numbers.addItem('Boy');
numbers.addItem('Girl');
console.log(numbers.print())
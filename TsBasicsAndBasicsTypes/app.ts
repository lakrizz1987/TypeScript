function add(n1: number, n2: number) {
    return n1 + n2
};

function printResult(num: number): void {
    console.log(num)
}

printResult(add(6, 12))
type User = { name: string; age: number; show: (num: number) => void }

let person: User = { name: 'Ivo', age: 32, show: printResult }

person.show(person.age)
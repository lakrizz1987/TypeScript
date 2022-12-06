type Input = number | string;
type User = { name: string, age: number }

function combine(input1: Input, input2: Input) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number') {

        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString()
    }

    return result;
}

function greet(user: User) {
    console.log(`Hi I am ${user.name} on ${user.age}`)
}

greet({ name: 'Ivo', age: 34 })

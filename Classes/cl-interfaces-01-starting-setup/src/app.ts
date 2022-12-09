interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

class User implements Person {
    name: string;
    age: number;

    constructor(n: string, age: number) {
        this.name = n;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name} on ${this.age}`);
    }
}

const user1: Person = {
    name: 'Ivo',
    age: 34,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const user2: Person = new User('Moni', 34);

user1.name = "Ivo"
user1.greet('Hello');

user2.greet('Hey aa')
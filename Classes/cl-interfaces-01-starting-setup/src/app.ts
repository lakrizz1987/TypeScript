interface Person {
    name: string;
    age: number;

    greet(phrase:string): void;
}

const user1: Person = {
    name: 'Ivo',
    age: 34,
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    }
}

user1.name = "Ivo"
user1.greet('Hello')
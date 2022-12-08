// Code goes here!
class Department {
    name: string;
    number: number;
    
    constructor(name: string, number: number) {
        this.name = name;
        this.number = number;
    }

    print() {
        console.log('Hello from ' + this.name)
    }
}

const accounting = new Department('Accounting', 1);
console.log(accounting)
accounting.print();
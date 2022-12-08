// Code goes here!
class Department {
    name: string;
    number: number;
    
    constructor(name: string, number: number) {
        this.name = name;
        this.number = number;
    }
}

const accounting = new Department('Accounting',1);
console.log(accounting)
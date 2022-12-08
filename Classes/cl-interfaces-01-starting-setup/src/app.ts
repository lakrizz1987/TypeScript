// Code goes here!
class Department {
    name: string;
    readonly id: number;
    private employees: string[] = [];

    constructor(name: string, number: number) {
        this.name = name;
        this.id = number;
    }

    print() {
        console.log('Hello from ' + this.name);
        //this.id = 4 - this throw error because id is read only
    }

    addEmployee(name: string) {
        this.employees.push(name);
    }

    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting', 1);
console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Ivo');

// accounting.employees[2] = 'Pesho' - When is private is only accesible from inside of class

accounting.printEmployeesInfo()
accounting.print();
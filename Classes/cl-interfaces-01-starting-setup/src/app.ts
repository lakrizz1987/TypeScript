// Code goes here!
class Department {
    name: string;
    readonly id: number;
    private employees: string[] = [];

    get employessData() {
        return this.employees;
    }

    set employessDataInfo(person: string) {
        this.addEmployee(person);
    }


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

class ITdepartament extends Department {
    admins: string[];

    constructor(id: number, admins: string[]) {
        super('IT', id)
        this.admins = admins;
    }
}

const accounting = new Department('Accounting', 1);
console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Ivo');
accounting.employessDataInfo = 'Pesho Petrov';

console.log(accounting.employessData);
// accounting.employees[2] = 'Pesho' - When is private is only accesible from inside of class

accounting.printEmployeesInfo()
accounting.print();

const it = new ITdepartament(22, ['Ivo']);
it.addEmployee('Gosho');
it.addEmployee('Moni');
it.printEmployeesInfo();
it.print();
console.log(it);
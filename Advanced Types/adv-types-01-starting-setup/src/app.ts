// Code goes here!

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type User = Admin | Employee;

const u1: User = {
    name: 'Ivo',
    privileges: ['create post'],
    startDate: new Date()
}

// Type Guards
function showUserInfo(user: User) {
    console.log(user.name);
    if ('privileges' in user) {
        console.log(user.privileges)
    }

    if ('startDate' in user) {
        console.log(user.startDate)
    }
}

//showUserInfo(u1)



class Car {
    drive() {
        console.log('Drive.....')
    }
}

class Truck {
    drive() {
        console.log('Drive.....')
    }

    loading(amount: number) {
        console.log('Loading cargo....' + amount)
    }
}

type Vehicle = Truck | Car;

const car = new Car;
const truck = new Truck;

function useVehicle(vehicle: Vehicle, amount: number) {
    vehicle.drive();

    if (vehicle instanceof Truck) {
        vehicle.loading(amount)
    }
}

useVehicle(car, 6)
useVehicle(truck, 5)

// Discriminated Unions

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Dog {
    type: 'dog';
    runningSpeed: number;
}

type Animal = Bird | Dog;

function animalInfo(animal: Animal) {
    let speed;
    switch (animal.type) {
        case ('bird'):
            speed = animal.flyingSpeed;
            break;

        case ('dog'):
            speed = animal.runningSpeed;
            break


    }
    console.log('Speed is ' + speed)
}

animalInfo({type:'dog',runningSpeed:8})
animalInfo({type:'bird',flyingSpeed:88})

// Type casting

//const inputElement = document.getElementById('input-user')! as HTMLInputElement;
const inputElement = <HTMLInputElement>document.getElementById('input-user')!;

inputElement.value = 'Hey there...'


//Nullish ?? - if something is undefine or null return the other value

const userData = null;

const sortedData = userData ?? 'Default'

console.log(sortedData)
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

useVehicle(car,6)
useVehicle(truck,5)
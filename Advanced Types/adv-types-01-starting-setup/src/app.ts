// Code goes here!

type Admin = {
    name: string;
    privleges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type User = Admin & Employee;

const u1: User = {
    name: 'Ivo',
    privleges:['create post'],
    startDate: new Date()
}
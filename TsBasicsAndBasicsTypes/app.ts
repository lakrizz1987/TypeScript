enum Gender {MALE, FEMALE}

const person: {
    name: string;
    age: number
    hobies: string[];
    mix: any[];
    role: { role: string }[]
    role2: [string, boolean]
    gender: Gender
} = {
    name: 'Ivo',
    age: 34,
    hobies: ['Sport', 'TV'],
    mix: [1, 'play'],
    role: [{ role: 'admin' }],
    role2: ['Ivo', true],
    gender: Gender.MALE
}

console.log(person.name)
console.log(person.gender)
person.hobies.forEach(hobby => console.log(hobby.toUpperCase()));
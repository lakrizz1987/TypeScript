const person: {
    name: string;
    age: number
    hobies: string[];
    mix: any[];
    role: { role: string }[]
    role2: [string, boolean]
} = {
    name: 'Ivo',
    age: 34,
    hobies: ['Sport', 'TV'],
    mix: [1, 'play'],
    role: [{ role: 'admin' }],
    role2: ['Ivo', true]
}

console.log(person.name)

person.hobies.forEach(hobby => console.log(hobby.toUpperCase()));
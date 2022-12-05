const person: {
    name: string;
    age: number
    hobies: string[];
    mix: any[]
} = {
    name: 'Ivo',
    age: 34,
    hobies: ['Sport', 'TV'],
    mix: [1, 'play']
}

console.log(person.name)

person.hobies.forEach(hobby => console.log(hobby.toUpperCase()));
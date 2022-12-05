var person = {
    name: 'Ivo',
    age: 34,
    hobies: ['Sport', 'TV'],
    mix: [1, 'play']
};
console.log(person.name);
person.hobies.forEach(function (hobby) { return console.log(hobby.toUpperCase()); });

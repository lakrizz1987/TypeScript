var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
var person = {
    name: 'Ivo',
    age: 34,
    hobies: ['Sport', 'TV'],
    mix: [1, 'play'],
    role: [{ role: 'admin' }],
    role2: ['Ivo', true],
    gender: Gender.MALE
};
console.log(person.name);
console.log(person.gender);
person.hobies.forEach(function (hobby) { return console.log(hobby.toUpperCase()); });

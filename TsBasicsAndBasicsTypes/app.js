function add(n1, n2) {
    return n1 + n2;
}
;
function printResult(num) {
    console.log(num);
}
printResult(add(6, 12));
var person = { name: 'Ivo', age: 32, show: printResult };
person.show(this.age);

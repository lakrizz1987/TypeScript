function add(n1, n2, showResult, text) {
    var result = n1 + n2;
    if (showResult) {
        return text + result;
    }
}
var a = 2;
var b = 3;
var showResult = true;
var text = 'Result is: ';
console.log(add(a, b, showResult, text));

function add(n1: number, n2: number, showResult: boolean, text: string) {
    let result = n1 + n2;

    if (showResult) {

        return text + result;
    }
}

const a = 2;
const b = 3;
let showResult = true
const text = 'Result is: '

console.log(add(a, b, showResult, text));


const num = 400
// console.log(num);

const num1 = new Number(490)
// console.log(num1);

// console.log(num1.toString().length)
// console.log(num1.toFixed(2));

const otherNum = 4355.45
// console.log(otherNum.toPrecision(4));
// console.log(otherNum.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++Math+++++++++++++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4543.23))
// console.log(Math.round(55.43))
// console.log(Math.floor(43.2))
// console.log(Math.ceil(34.4))
// console.log(Math.min(3,4,25,3))
// console.log(Math.max(43,6,3,33))


console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min + 1)) + min)
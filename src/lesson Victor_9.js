let a = 0
const createCounter = () => {
    const counter = {
        increment() {
            a++
        },
        getCounter() {
            return a
        }
    }
    return counter
}
// counter1 = {increment() {a++}, getCounter() {return a}} //object
// counter2 = {increment() {a++}, getCounter() {return a}} //object
const counter1 = createCounter()
const counter2 = createCounter() // у каждого countera свой let a = 0
counter1.increment()
counter1.increment()
counter2.increment()
console.log(counter2.getCounter()) // 3 или 1
// если 'а' в глобальной з.в-сти, то 'а' находится в lexical env родителя(всего этого файла) и он всего 1. Ответ будет 3
// если 'а' в з.в-сти ф-ции, то 'а' находится в lexical env этой ф-ции и у каждой он будет свой. Ответ будет 1

// _______________________________________________________________________________________________________________________

const print = (name) => {
    console.log(`hello, ${name}`)
}
const createPrint = (name) => {
    return () => print(name)
}
const printMax = () => print('Max')
const printAlex = () => print('Alex')

// setTimeout(printMax, 1000)
// setTimeout(printAlex, 1000)

setTimeout(createPrint('Alex'), 1000)
setTimeout(createPrint('Max'), 1000)

// _______________________________________________________________________________________________________________________

// const thunkMiddleware = (thunk) => {
//     thunk({title: superObject}, () => {})
// }
//
// const getUserCreator = (id) => {
//     const thunk1 = (superObject, superFunction) => {
//         fetch('http://google.com/id=' + id)
//     }
//     return thunk1
// }
//
// thunkMiddleware(getUserCreator(10))

// _______________________________________________________________________________________________________________________

const func1 = () => {
    return () => {
        return console.log(10)
    }
}
console.log(func1()())

// _______________________________________________________________________________________________________________________

const func2 = () => () => () => () => console.log(20)
console.log(func2()()()())

const func = (a) => (b) => (c) => (d) => console.log(a + b + c + d)
console.log(func(10)(10)(10)(10)) // 40
console.log(func(10)()(10)(10)) // NaN
console.log(func('10')()()()) // 10undefinedundefinedundefined

const funcB = func2(1)
const funcC = funcB(2)
const funcD = funcC(3)
console.log(funcD(4))

// _______________________________________________________________________________________________________________________

const sum = (a, b) => {
    return a + b
}
console.log(sum(1, 10))

// _______________________________________________________________________________________________________________________

function outerFunction(a) {
    return function innerFunction(b) {
        return a + b
    }
}

console.log(outerFunction(10)(5)) // 15
const add10 = outerFunction(10)
console.log(add10(5)) // 15
console.log(outerFunction(10)) // [Function: innerFunction]

// _______________________________________________________________________________________________________________________

const summ = (a, b, c, d) => {
    return a + b + c + d
}
summ(10, 10, 10, 5)
summ(10, 10, 10, 6)
summ(10, 10, 10, 7)

const summThreeConst = (d) => {
    return summ(10, 10, 10, d)
}
console.log(summThreeConst(1))
let summThreeConstParam = (d) => (a, b, c) => {
    return summ(10, 10, 10, d)
}
console.log(summThreeConstParam(15)(10, 10, 10))

// _______________________________________________________________________________________________________________________

let phrase = 'Hello'
if (true) {
    let user = 'John'

    function sayHi() {
        console.log(`${phrase} ${user}`)
    }
}
sayHi() // Hello John, т.к функция объявлявлена через declaration. Если бы была expression(let sayHi = () =>{}), то sayHi is not defined

// _______________________________________________________________________________________________________________________

const sumExample = (a) => {
    return (b) => a + b
}
console.log(sumExample(1)(2))

// _______________________________________________________________________________________________________________________

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
function inBetween(start, end) {
    return (
        (el) => el >= start && el <= end
    )
}

function inArray(arr) {
    return (
        (el) => arr.includes(el)
    )
}

const names = ['Donald', 'Alex', 'Bob']
console.log(names.sort()) // [ 'Alex', 'Bob', 'Donald' ]
// 1. сортирует строки "из коробки", т.е. без доп.параметров

const names_2 = ['Donald', 'alex', 'aLeX', 'игорь', 'Юрий']
console.log(names_2.sort()) // [ 'Donald', 'aLeX', 'alex', 'Юрий', 'игорь' ]
// 2. сортирует строки типо по "алфавиту" (unicode)

console.log(names) // [ 'Alex', 'Bob', 'Donald' ]
// 3. работает мутабельно (т.е. изменяет массив)

console.log(names.sort() === names) // true
// 4. возвращает ссылку на исходный массив

const nums = [1000, 333, 9999, 77, -3]
console.log(nums.sort())  // [ -3, 1000, 333, 77, 9999 ]
// 5. сортирует числа как элементы unicode

const compFunc = (a, b) => { // comparison-сравнение
    if (a > b) { //надо поменять местами, т.к хотим по возрастанию
        return 10 // любое число больше 0 дает команду методу sort, что надо поменять местами два числа
    } else {
        return -1 // любое число меньше 0 дает команду методу sort, что не нужно менять местами два числа
    }
}
console.log(nums.sort(compFunc)) // [ -3, 77, 333, 1000, 9999 ]

const compFunc_2 = (a, b) => a - b // т.к если а>b, то будет положительное число
console.log(nums.sort(compFunc_2)) // [ -3, 77, 333, 1000, 9999 ]

const compFunc_3 = (a, b) => b - a // т.к если b>a, то будет положительное число
console.log(nums.sort(compFunc_3)) // [ 9999, 1000, 333, 77, -3 ]

console.log(nums.reverse()) // [ -3, 77, 333, 1000, 9999 ], т.к. до этого nums сортировался по убыванию
// 6. Функция сравнения должна возвращать число больше или меньше 0
// 7. Вместе с sort часто используется reverse

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Helge',
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: 'alex',
        age: 22,
        isMarried: true,
        scores: 89
    },
]
// ----------------------------------------------------------------------------------

const sortByName = (a, b) => {
    if (a.name > b.name) {
        return 10
    } else {
        return -10
    }
}
console.log(students.sort(sortByName))
// [
//     { name: 'Alex', age: 24, isMarried: true, scores: 89 },
//     { name: 'Bob', age: 22, isMarried: true, scores: 95 },
//     { name: 'Helge', age: 24, isMarried: true, scores: 90 },
//     { name: 'John', age: 19, isMarried: false, scores: 121 },
//     { name: 'Nick', age: 20, isMarried: false, scores: 120 },
//     { name: 'alex', age: 22, isMarried: true, scores: 89 }
// ]
// ----------------------------------------------------------------------------------

const sortByNameWithoutRegistr = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 10
    } else {
        return -10
    }
}
console.log(students.sort(sortByNameWithoutRegistr))
// [
//     { name: 'alex', age: 22, isMarried: true, scores: 89 }
//     { name: 'Alex', age: 24, isMarried: true, scores: 89 },
//     { name: 'Bob', age: 22, isMarried: true, scores: 95 },
//     { name: 'Helge', age: 24, isMarried: true, scores: 90 },
//     { name: 'John', age: 19, isMarried: false, scores: 121 },
//     { name: 'Nick', age: 20, isMarried: false, scores: 120 },
// ]
// ----------------------------------------------------------------------------------

console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
// метод localeCompare производит сравнение исходной строки(a.name) со своим параметром(b.name)
// [
//     { name: 'alex', age: 22, isMarried: true, scores: 89 }
//     { name: 'Alex', age: 24, isMarried: true, scores: 89 },
//     { name: 'Bob', age: 22, isMarried: true, scores: 95 },
//     { name: 'Helge', age: 24, isMarried: true, scores: 90 },
//     { name: 'John', age: 19, isMarried: false, scores: 121 },
//     { name: 'Nick', age: 20, isMarried: false, scores: 120 },
// ]
// ----------------------------------------------------------------------------------
// 8. Сортировка массива объектов по строковым значениям

console.log(students.sort((a, b) => a.age - b.age))
// [
//     { name: 'John', age: 19, isMarried: false, scores: 121 },
//     { name: 'Nick', age: 20, isMarried: false, scores: 120 },
//     { name: 'alex', age: 22, isMarried: true, scores: 89 },
//     { name: 'Bob', age: 22, isMarried: true, scores: 95 },
//     { name: 'Alex', age: 24, isMarried: true, scores: 89 },
//     { name: 'Helge', age: 24, isMarried: true, scores: 90 }
// ]
// ----------------------------------------------------------------------------------
// 9. Сортировка массива объектов по числовым значениям


// bubble sort (сортировка пузырьком)

const nums_2 = [-3, 100, 77, 333, 999,] // length = 5
let outer = 0
let count = 0
for (let j = 0; j < nums_2.length - 1; j++) {
// for (let j = 1; j < nums_2.length; j++) { // -3 сравнивать не нужно с последующим, т.к оно уже на месте
    outer++
    let isSorted = true
    for (let i = 0; i < nums_2.length - 1 - j; i++) { // 2 & 7
    // for (let i = 0; i < nums_2.length; i++) { // 999 & undefined, т.к. в массиве 5 элементов, а не 6
        count++
        if (nums_2[i] > nums_2[i+1]) { // перемещаем самое большое число массива вправо
            // let temp = nums_2[i + 1]
            // nums_2[i + 1] = nums_2[i]
            // nums_2[i] = temp
            [nums_2[i], nums_2[i + 1]] = [nums_2[i + 1], nums_2[i]]
            isSorted = false
        }
    }
    if (isSorted) break
}
console.log(nums_2)
console.log(outer)
console.log(count)

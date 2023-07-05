// общий пример промиса:
// const promise = new Promise((resolve, reject) => {  // new Promise - функция конструктор для создания промиса
//     const data = {} // формируем data какими-то вычислениями (например setTimeout)
//     if (data) {
//         resolve(data)
//     } else {
//         reject(err)
//     }
// })
// __________________________________________________________________________________________________________________

// const server = {
//     getData(url) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // resolve('Some data')
//                 reject('Something went wrong')
//             }, 2000)
//         })
//     }
// }

// const promise = server.getData()

// promis.then((data) => {
//     console.log(data)
// })
// если Promise из состояние ‘pending’ перешел в состояние 'resolve',т.е. выполнился, то обрабатываем данные через .then

// promise.catch((err) => {
//     console.log(err)
// })
// если Promise из состояние ‘pending’ перешел в состояние 'rejected',т.е. не выполнился, то ошибку обрабатываем с помощью .catch

// promise.finally(() => {
//     console.log('finally')
// })
// если Promise из состояние ‘pending’ перешел в любое состояние, то обрабатываем это с помощью .finally
// __________________________________________________________________________________________________________________

// Цепочка промисов №1. В server.getData() получаем resolve, т.е. условие выполняется
// const server = {
//     getData(url) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Some data')
//                 // reject('Something went wrong')
//             }, 2000)
//         })
//     }
// }

// const allPromise = server.getData()
//     .then((data)=>{
//         console.log(data) // 'Some data', т.к. зарезолвился server.getData()
//     })
//     .then((data)=>{
//         console.log(data) // undefined, т.к. зарезолвился предыдущий промис(.then), но не получили данных
//         return 7
//     })
//     .then((data)=>{
//         console.log(data) // 7, т.к. зарезолвился предыдущий промис(.then), и там мы возвращаем 7
//         return 'finaly promise resolve'
//     })

// console.log(allPromise) // Promise { <pending> }, т.к. эта цепочка промисов еще выполняется(ответа нет)

// setTimeout(()=>{
//     console.log(allPromise) // Promise { 'finaly promise resolve' }, т.к. эта цепочка промисов выполнилась и выводится последний
// },5000)
// __________________________________________________________________________________________________________________

// Цепочка промисов №2. В server.getData() получаем rejected, т.е. условие не выполняется(обработка ошибки)
// const server = {
//     getData(url) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // resolve('Some data')
//                 reject('Something went wrong')
//             }, 2000)
//         })
//     }
// }
// server.getData()
//     .finally(() => {
//         console.log('finally') // 'finally', т.к. отрабатывает в любом случае и пропускает результат сквозь себя, поэтмоу следующий .then не сработает
//     })
//     .then((data) => {
//         console.log(data) // не выполнится, т.к. у server.getData() состояние 'pending' перешло в состояние reject(.catch)
//     })
//     .catch((err) => {
//         console.log(err) // 'Something went wrong', т.к. это первый .catch для server.getData()
//         return 10
//     })  // Важно!! не смотря на то, что не выполнился .then, выполняется .catch
//     .finally((data) => {
//         console.log('finally') // 'finally', т.к. отрабатывает в любом случае
//         console.log(data) // 'undefined', т.к. помимо .then и .catch выполняется .finally, но в .finally не передать параметры из promise
//     })
//     .then((data) => {
//         console.log(data)  // 10, т.к. после обработки предыдущего промиса (.then+.catch) получаем resolve
//     })
//     .catch((err) => {
//         console.log(err) // не выполнится, т.к уже выполнился .then(10)
//     })
//     .then((data) => {
//         console.log('thenWithA')  // 'thenWithA', т.к. после обработки предыдущего промиса .then получаем resolve
//         console.log(a) // !!!!такой переменной нет
//     })
//     .then((data) => {
//         console.log('then2')  // не выполнится, т.к. предыдущий .then('thenWithA') выдаст ошибку, из-за console.log(a), т.е. reject
//     })
//     .catch((err) => {
//         console.log('catch') // 'catch', т.к. это первый reject в цепочке после .then('thenWithA')
//     })
// __________________________________________________________________________________________________________________

// Цепочка промисов №3. В server.getData() получаем resolve, т.е. условие выполняется
// const server = {
//     getData(url) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Some data')
//                 // reject('Something went wrong')
//             }, 2000)
//         })
//     }
// }
// server.getData()
//     .then((data) => {
//         return new Promise((resolve, reject) => {
//             resolve('Some data2')
//             reject('Something went wrong2')
//         })
//     })
//     .then((data) => {
//         console.log(data)  // 'Some data2', т.к. new Promise резолвится, а внутри у него 'Some data'
//     })
//     .then((data) => {
//         return new Promise(() => {}) // ...вечное состояние 'pending'
//     })
//     .then((data) => {
//         console.log(data)  // не выполнится, т.к внутри new Promise нет данных, т.е. состояние pending не изменится никогда
//     })
//     .finally(() => {
//         console.log('finally')   // не выполнится, т.к внутри new Promise нет данных, т.е. состояние pending не изменится никогда
//     })
//     .then((data) => {
//         console.log('fail')  //  // не выполнится, т.к внутри new Promise нет данных, т.е. состояние pending не изменится никогда
//     })
// __________________________________________________________________________________________________________________

// Задача
// Promise.reject('reject1')
//     .catch((t) => t + 'catch1')  // reject1+catch1
//     .catch((t) => t + 'catch2')  // не попадаем
//     .then((t) => t + 'then1')  // reject1+catch1+then1
//     .finally((t) => t + 'finally')  // в общий результат не попадает. Не принимает ничего в себя и не выдает для промисов
//     .then((t) => console.log(t)) // reject1+catch1+then1
//
// Promise.reject('reject1')
//     .catch((t) => t + 'catch1')  // reject1+catch1
//     .catch((t) => t + 'catch2')  // не попадаем
//     .then((t) => t + 'then1')  // reject1+catch1+then1
//     .finally((t) => console.log(t + 'finally'))  // в общий результат не попадает. Не принимает ничего в себя и не выдает для промисов
//     .then((t) => console.log(t)) // reject1+catch1+then1
// __________________________________________________________________________________________________________________

// fetch('https://shop/autors', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         fetch('https://shop/autors/65', (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 fetch('https://shop/autors/65/books', (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         fetch('https://shop/autors/65/books/23', (err, data) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// fetch('https://shop/autors')
//     .then((data) => {
//         return fetch('https://shop/autors/65')
//     })
//     .then((data) => {
//         return fetch('https://shop/autors/65/books')
//     })
//     .then((data) => {
//         return fetch('https://shop/autors/65/books/23')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
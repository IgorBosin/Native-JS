// Способы промисификации

// 1 способ. Добавление слова async в функции
// const findUserInDB = async () => {
//     return {id: 1, name: 'Igor', friendId: 3}
// }
// console.log(findUserInDB()) // Promise { { id: 1, name: 'Igor', friendId: 3 } }

// 2 способ. Promise.resolve
// const findUserInDB = () => {
//     return Promise.resolve({id: 1, name: 'Igor', friendId: 3})
// }
// console.log(findUserInDB()) // Promise { { id: 1, name: 'Igor', friendId: 3 } }

// 3 способ. new Promise
const findUserInDB = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // в другие 2 способа не засунуть setTimeout, т.к. функция его ретурнит
            resolve({id: 1, name: 'Igor', friendId: 3})
            reject('error')
        }, 1000)
    })
}
console.log(findUserInDB()) // Promise { { id: 1, name: 'Igor', friendId: 3 } }

findUserInDB()
    .then((user) => {
        console.log(user.name)
        return user.friendId
    })

const foo = async () => {
    const user = await findUserInDB(1);
    console.log(user.name)
}
foo()


// __________________________________________________________________________________________________________________
// Вывод друзей юзеров
// const findUserInDB = ((id) => {
//     const users = [
//         {id: 1, name: 'Igor', friendId: 3},
//         {id: 2, name: 'Leha', friendId: null},
//         {id: 3, name: 'Maha', friendId: 2},
//     ]
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(users.find(el => el.id === id))
//             reject('Error')
//             // }, (Math.floor(Math.random() * 1000)))
//         }, 1000)
//     })
// })
//
//
// findUserInDB(1)
//     .then((user) => {
//         console.log(user.name)
//         return user.friendId
//     })
//     .then((friendId) => {
//         return findUserInDB(friendId)
//     })
//     .then((friend1) => {
//         console.log(friend1.name)
//         return friend1.friendId
//     })
//     .catch((er) => {
//         debugger
//         console.log('err')
//         return {id: 1, name: 'Fake', friendId: 3}
//     })
//     .then((friendId) => findUserInDB(friendId))
//     .then((friend2) => console.log(friend2.name))

//
// const foo = async () => {
//     try {
//         const user = await findUserInDB(1);
//         console.log(user.name)
//         const friend1 = await findUserInDB(user.friendId);
//         console.log(friend1.name);
//         const friend2 = await findUserInDB(friend1.friendId)
//         console.log(friend2.name)
//     } catch {
//     }
// }
// foo()

// __________________________________________________________________________________________________________________
// Обработка ошибок при выводе друзей юзеров

// const findUserInDB = ((id) => {
//     const users = [
//         {id: 1, name: 'Igor', friendId: 4},
//         {id: 2, name: 'Leha', friendId: null},
//         {id: 3, name: 'Maha', friendId: 2},
//     ]
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const findUser = users.find(el => el.id === id)
//             if (findUser) {
//                 resolve(findUser)
//             } else reject('User does not exist')
//             // }, (Math.floor(Math.random() * 1000)))
//         }, 1000)
//     })
// })

// findUserInDB(1)
//     .then((user) => {
//         console.log(user.name)
//         return user.friendId
//     })
//     .then((friendId) => {
//         return findUserInDB(friendId)
//     })
//     .catch((err) => {
//         console.log(err)
//         return {id: 1, name: 'Fake', friendId: 3}
//     })
//     .then((friend1) => {
//         console.log(friend1.name)
//         return friend1.friendId
//     })
//     .then((friendId) => findUserInDB(friendId))
//     .then((friend2) => console.log(friend2.name))


// const foo = async () => {
//     try {
//         const user = await findUserInDB(1);
//         console.log(user.name)
//         let friend1 = 0
//         try {
//             friend1 = await findUserInDB(user.friendId);
//         } catch (err) { // обработка ошибки конкретной строки
//             friend1 = {id: 1, name: 'Fake', friendId: 3}
//         }
//         console.log(friend1.name);
//         const friend2 = await findUserInDB(friend1.friendId)
//         console.log(friend2.name)
//     } catch (err) {
//         console.log(err)
//     }
// }
// foo()

// __________________________________________________________________________________________________________________
// Создание промисов
// 1. Создание зарезовленного промиса
// function getNumber() {
//     return Promise.resolve(Math.floor(Math.random() * 100))
// }

// 2. Создание промиса через класс new Promise
// function getNumber() {
//     const promise = new Promise((resolve, reject) => { // 1. Создается переменная promise; 2. Создается класс Promise
//         setTimeout(()=>{  // 3. Запускается callback ф-ция внутри класса Promise
//             resolve(Math.floor(Math.random()*100))
//             reject('Error')
//         },(Math.floor(Math.random()*2000)))
//     })
//     return promise
// }
//
// const n1 = getNumber().then(n => console.log(n))
// const n2 = getNumber().then(n => console.log(n))
//
//
// function getUsers() {
//     const promise = new Promise( // 1. Создается переменная promise; 2. Создается класс Promise
//         () => { // 3. Запускается callback ф-ция внутри класса Promise
//         })
//     return promise
// }

// __________________________________________________________________________________________________________________
// const repo = {
//     save(data) { // синхронное сохранение в localStorage/базу данных на бэкэнд
//         try {
//             setTimeout(() => {
//                 localStorage.setItem('some-key', JSON.stringify(data))
//
//             }, 5000)
//         } catch (error) {
//             return false
//         }
//         return true
//     },
//     saveAsync(data) {  // асинхронное сохранение в localStorage/базу данных на бэкэнд
//         return new Promise((resolve, reject) => {
//             try {
//                 setTimeout(() => {
//                     localStorage.setItem('some-key', JSON.stringify(data))
//                     resolve()
//                 }, 5000)
//             } catch (error) {
//                 reject(error)
//             }
//         })
//     },
//     read() {
//         const data = localStorage.getItem('some-key')
//         if (!data) {
//             return null
//         } else {
//             return JSON.parse(data)
//         }
//     },
//     readAsync() {
//         return new Promise((resolve, reject) => {
//             const data = localStorage.getItem('some-key')
//             if (!data) {
//                 resolve(null)
//             } else {
//                 resolve(JSON.parse(data))
//             }
//         })
//     }
// }

// синхронное сохранение
// const resultSave = repo.save({name: 'IT-KAMASUTRA'})
// if (resultSave) {
//     console.log('SAVED') // еще не знаем результат. Нельзя выводить "SAVED". Добавится только через 5 секунд
// } else console.warn('NOT SAVED')
// const resultRead = repo.read()

// асинхронное сохранение #1 (.then)
// const run1 =
//     repo.saveAsync({name: 'IT-KAMASUTRA'})
//         .then(() => console.log('SAVED'))
//         .catch((error) => console.warn('NOT SAVED:' + error))
//         .then(() => { // если нужно READ после SAVED, то нужен этот .then
//             return repo.readAsync()
//         })
//         .then((data) => console.log(data))
//         .catch((error) => console.warn('NOT READ:' + error))
// run1()

// асинхронное сохранение #2 (async)
// const run2 = async () => {
//     await repo.saveAsync({name: 'IT-KAMASUTRA'})
//     console.log('SAVED') // сначала SAVED потом READ. Отработка поочереди
//
//    const data = await repo.readAsync()
//     console.log(data)
// }
// run2()

// __________________________________________________________________________________________________________________
// выводить 1,2,3,4 через каждую секунду
// const wait = (interval, number) => new Promise((resolve) => {
//     setTimeout(() => {
//         resolve()
//         console.log(number)
//     }, interval)
// })

// 1 способ
// const run = () => {
//     wait(1000, 1)
//         .then(() => {
//             wait(1000, 2)
//                 .then(() => {
//                     wait(1000, 3)
//                         .then(() => {
//                             wait(1000, 4)
//                         })
//                 })
//         })
// }
// run()

// 2 способ
// wait(1000, 1)
//     .then(() => {
//         return wait(1000, 2)
//     })
//     .then(() => {
//         return wait(1000, 3)
//     })
//     .then(() => {
//         return wait(1000, 4)
//     })

// const wait = (interval,number) => new Promise((resolve, reject) => {
//     try {
//         setTimeout(() => {
//             resolve()
//             console.log(number)
//         }, interval)
//     } catch (err) {
//         console.log(err)
//         reject('err')
//     }
// })
// const getNumber = async () => {
//     await wait(1000,1)
//     await wait(1000,2)
//     await wait(1000,3)
// }
// getNumber()
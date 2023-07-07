// const promise = fetch('https://google.com/?query=js')
//     // console.log(promise) // Promise { <pending> }
//     .then((data) => {
//         console.log(data) // вернет какой-то сложный объект(нужно удалить присваивание переменной)
//     })

//_____________________________________________________________________________________________________________________
// Одновременные запрос
// fetch('https://duckduckgo.com/?query=js')
//     .then((data) => {
//         console.log(data.url) // выполнится, когда сервер даст ссылку
//     })
//     .then(() => {
//         console.log('bing') // выполнится параллельно с 'google', т.к.из предыдущего .then нет return, т.е. undefined
//         fetch('https://bing.com/?query=js')
//     })
//     .then((data) => {
//         console.log('google') // выполнится параллельно с 'bing', т.к.из предыдущего .then нет return, т.е. undefined
//         fetch('https://google.com/?query=js')
//     })

//_____________________________________________________________________________________________________________________
// Поочередные запросы, т.е. пока не выполнится предыдущий текущий выполняться не будет
// fetch('https://duckduckgo.com/?query=js')
// .then((data)=>{
//     console.log(data.url)
// })
// .then((data)=>{
//     return fetch ('https://bing.com/?query=js')
// })
// .then((data)=>{
//     console.log(data.url)
//     return fetch('https://google.com/?query=js')
// })
// .then((data)=>{
//     console.log(data.url)
// })

//_____________________________________________________________________________________________________________________
// Обрабатываем then'ы catch'ами
// fetch('https://duckduckgo.com/?query=js')
//     .then((data) => {
//         console.log('1 worker - data.url')
//     })
//     .then((data) => {
//         return fetch('https://bingdede.com/?query=js')
//     })
//     .catch((err) => {
//         console.error('ERRORRRRRR1') // 'ERRORRRRRR1', т.к. в запросе сделали ошибку - bingdede
//     })
//     .then((data) => {
//         console.log(data.url)
//         return fetch('https://google.com/?query=js') // не отработает, т.к. из .catch 'ERRORRRRRR1' ничего не вернули
//     })
//     .catch((err) => {
//         console.log('ERRORRRRRR2') // 'ERRORRRRRR2', т.к. не отработал .then - 'https://google.com/?query=js'
//     })
//     .then((data) => {
//         console.log(data.url) // не отработает, т.к. из .catch 'ERRORRRRRR2' ничего не вернули
//     })
//     .catch((err) => {
//         console.log('ERRORRRRRR3') // 'ERRORRRRRR3', т.к. не отработал предыдущий .then
//     })

//_____________________________________________________________________________________________________________________
// статические методы промиса: all | race | allSettled | any

//_____________________________________________________________________________________________________________________
// Обработка данных полученных со всех серверов (all)

// Promise.all([  // Должен быть массив. Запросы идут по-порядку, начиная с первого элемента
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ])
//     .then((bigData) => {
//         console.log(bigData[0].url) // https://www.bing.com/?query=js&toWww=1&redig=F01D7008144040CA81D4D77C9F46DA90
//         console.log(bigData[1].url) // https://www.google.com/?query=js
//         console.log(bigData[2].url) // https://duckduckgo.com/?query=js
//     })

// Promise.all([  // Если в одном из запросов получили err, то весь промис reject
//     fetch('https://gowwwwwogle.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ])
//     .then((bigData) => {
//         console.log(bigData[0].url) // не отработает
//         console.log(bigData[1].url) // не отработает
//         console.log(bigData[2].url) // не отработает
//     })
//     .catch((err) => {
//         console.log(err) // err
//     })

//_____________________________________________________________________________________________________________________
// Обработка данных полученных с сервера, дающего ответ первым (race)
// Promise.race([
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ])
//     .then((firsData) => {
//         console.log(firsData.url) // https://duckduckgo.com/?query=js, т.к. самый первый дал ответ
//     })
//     .catch((err) => {
//         console.log(err)  // не отработает, т.к. resolve
//     })

// Promise.race([
//     fetch('https://gowwwwwwwogle.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ])
//     .then((firsData) => {
//         console.log(firsData.url) // не отработает, т.к. в одном запросе ошибка (gowwwwwwwogle)
//     })
//     .catch((err) => {
//         console.log(err) // err, т.к. в одном из запросов получили reject
//     })

//_____________________________________________________________________________________________________________________
// Обработка данных полученных с любого из серверов(но с самого первого) (any)

// Promise.any([
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ])
//     .then((firsData) => {
//         console.log(firsData.url) // https://duckduckgo.com/?query=js, т.к. самый первый дал ответ
//     })
//     .catch((err) => {
//         console.log(err)  // не отработает, т.к. resolve
//     })

// Promise.any([
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://ducwwwwwwwkduckgo.com/?query=js')
// ])
//     .then((firsData) => {
//         console.log(firsData.url) // 'https://google.com/?query=js', т.к. самый первый дал ответ (в duckduckgo ошибка)
//     })
//     .catch((err) => {
//         console.log(err)  // не отработает, т.к. resolve
//     }) // !!Важно. Если .catch отработает, то вернет массив ошибок

//_____________________________________________________________________________________________________________________
// Обработка данных полученных с сервера с наглядным статусом промиса - 'fulfilled' или 'rejected' (allSettled)
// Promise.allSettled([
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ])
//     .then((settlerdData)=>{
//         console.log(settlerdData) // массив объектов со статусом, все 3 fetch  status: 'fulfilled'
//     })
//     .catch((err)=>{
//         console.log(err) // не попадаем никогда
//     })

// Promise.allSettled([
//     fetch('https://goowwwwgle.com/?query=js'),
//     fetch('https://bwwwwing.com/?query=js'),
//     fetch('https://ducwwwwkduckgo.com/?query=js')
// ])
//     .then((settlerdData) => {
//         console.log(settlerdData)  // массив объектов со статусом, все 3 fetch  status: 'rejected'
//     })
//     .catch((err) => {
//         console.log(err) // не попадаем никогда
//     })

//_____________________________________________________________________________________________________________________
// Обработка данных через async await

const foo = async () => { // обязательно пишем async, чтоб внутри использовать await
    try {                  // почти как .then
        const googleData = await fetch('https://google.com/?query=js') // await, т.е. дожидаемся ответа от каждого запроса
        console.log(googleData.url)          // 'https://google.com/?query=js'
        const bingData = await fetch('https://bing.com/?query=js')
        console.log(bingData.url)            // 'https://bing.com/?query=js', после получения ответа от googleData
        const ducducgoData = await fetch('https://duckduckgo.com/?query=js')
        console.log(ducducgoData.url)        // 'https://duckduckgo.com/?query=js', после получения ответа от ducducgoData
// setAllData([googleData, bingData, ducducgoData])
    } catch (err) {         // вместо .catch
        console.log('ERROR!!', err)         // не попадаем, т.к. все fetch получили статус resolved
    } finally {
        console.log('finally')               // 'finally'
    }
    // return (await fetch('https://google.com/?query=js')).url
}
// foo()
const typeFoo = foo()
console.log(typeFoo) // Promise { <pending> }
setTimeout(() => {
    console.log(typeFoo) // Promise { undefined }, т.к. ничего не позвращаем
}, 3000)

typeFoo
    .then(()=>{
    console.log('then worked') // 'then worked' - на async функцию можно подписаться .then'ом
}).catch(()=>{
    console.log('catch worked')}) // не отработает

// const foo1 = async () => {
//     try {                  // почти как .then
//         const googleData = await fetch('https://google.com/?query=js') // await, т.е. дожидаемся ответа от каждого запроса
//         console.log(googleData.url)          // https://www.google.com/?query=js
//         const bingData = await fetch('https://bing111.com/?query=js')
//         console.log(bingData.url)            // не попадаем, т.к. в fetch (bing111) ошибка
//         const ducducgoData = await fetch('https://duckduckgo.com/?query=js')
//         console.log(ducducgoData.url)        // не попадаем, т.к. после 'bing111' попали в .catch
// // setAllData([googleData, bingData, ducducgoData])
//     } catch (err) {         // вместо .catch
//         console.log('ERROR!!', err)         // err
//     } finally {
//         console.log('finally')               // 'finally'
//     }
// }
// foo1()
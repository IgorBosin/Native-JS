let promise = {}

// button.addEventListener('click',()=>{})
// callback._status = 'pending' | 'resolved' | 'rejected'  - скрытое свойство

promise.then(() => {
}) // -> 'resolved' | 'fullfilled' , подписываемся на then, когда у callback будет состояние resolved
promise.catch(() => {
}) // -> 'rejected' ,  подписываемся на catch, когда у callback будет состояние rejected

// 1. сделать запрос на гугл какие курсы лучше всех
// 2. получить 2 лучших результата и загрузить эти сайты
// 3. взять результаты и processData(запроцессить данные):

//по 1 пункту:
fetch('http://google.com', (googleData) => { // чтоб не ждать ответ от гугла пишем логику, которая
    const result = getGoogleResult(googleData) // позволит выполнить код когда ответ придет

    let firstResultData = null
    let secondResultData = null

    const processDataSuccessHandler = () => {}
    //по 2 пункту:
    fetch(result[0], (dataFromIncubator) => {
        firstResultData = dataFromIncubator
        if (secondResultData) {
            processData(firstResultData, secondResultData, processDataSuccessHandler)
        }
    })
    //по 2 пункту:
    fetch(result[1], (dataFromHexlet) => {
        secondResultData = dataFromHexlet
        if (secondResultData) {
            processData(firstResultData, secondResultData, processDataSuccessHandler)
        }
    })
})

// по 3 пункту:
function processData(data1, data2, callback) {
// сделать анализ данных
}
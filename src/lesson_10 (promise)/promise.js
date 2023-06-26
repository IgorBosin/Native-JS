// 1. сделать запрос на гугл какие курсы лучше всех
// 2. получить 2 лучших результата и загрузить эти сайты
// 3. взять результаты и processData(запроцессить данные):

//по 1 пункту:
const promise = fetch('http://google.com')

promise.then((data) => {
    const result = getGoogleResult(googleData) // позволит выполнить код когда ответ придет

    let firstResultData = null
    let secondResultData = null

    const processDataSuccessHandler = () => {
    }

    //по 2 пункту:
    const incubatorDataPromise = fetch(result[0])
    incubatorDataPromise.then((dataFromIncubator) => {
        firstResultData = dataFromIncubator
        if (secondResultData) {
            processData(firstResultData, secondResultData, processDataSuccessHandler)
        }
    })

    //по 2 пункту:
    const hexletData = fetch(result[1])
    hexletData.then((dataFromHexlet) => {
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
let parsedGoogleData = null
let dataFromIncubator = null

// выполнение кода шаг за шагом
fetch('http://google.com') // сделать запрос в гугл
    .then((data) => {
        parsedGoogleData = parseGoogleResult(data) // данные пришли-распарсили
        return fetch(parsedGoogleData[0]) // сделать запрос в первый сайт
    })
    .then((data) => {
        dataFromIncubator = data // изменить переменную dataFromIncubator и отдать в processData
        return fetch(parsedGoogleData[1]) // сделать запрос во второй сайт
    })
    .then((dataFromHexlet) => {
        return processData(dataFromIncubator, dataFromHexlet) // вызвать ф-цию с переданными пар-ми
    })
    .then(function processDataSeuccessHandler(finalData) {
        console.log('SUCCESS') // когда все данные пришли оповестить
    })

function processData(data1, data2, callback) {

}
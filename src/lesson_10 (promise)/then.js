thenPromise1 = wait(1000)
// then принимает саллбек и возвращает новый промисс
const thenPromise2 = promise1.then(() => {
    console.log('subscriber for promise1 called')
}) // когда подождешь 1000мс выполни действие(колбек). Когда действие
// будет выполнено, то promise2 зарезолвится
const thenPromise3 = thenPromise2.then(() => {
    console.log('subscriber for promise2 called')
}) // когда выполнится действие(колбек), которое передали в then то
// promise3 зарезолвится
thenPromise3.then(() => {
}) // когда выполнится коллбек в then тогда зарезолвится promise3!!


// как  правильно записывать цепочку промисов:
const thenPromise3CorrectNotation = promise1 // название дается тому промису, который самый последний
    .then(() => {
        console.log('subscriber for promise1 called')
        return 1
    })
    .then((one) => { // эта функция начнет выполняться,когда выполнится промис,который вылез из предыдущего .then
        console.log('subscriber for promise2 called')
        return 2
    })
    .then((two) => {
        console.log('subscriber for promise3 called')
    })
    .then((noData) => {
        console.log('subscriber for promise4 called')
    })
// 1. thenPromise3CorrectNotation появился моментально. then отработали моментально,
// а колбеки в then отрабатывают постепенно
// 2. подписчик у 1 then есть? да. поэтому он отрабатывает когда зарезолвился 1 then
// 3. подписчик у 2 then есть? да. поэтому он отрабатывает когда зарезолвился 2 then

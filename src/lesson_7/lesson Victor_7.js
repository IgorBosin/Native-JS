//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const repeatString = (a, b, c) => {
    let str =  (a + c).repeat(b)
    return str.slice(0,str.length-1)
}
const repeatString2 = (a, b, c) => {
    let str = ''
    for (let i = 0; i < b; i++) {
        str += a+c
    }
    return str.slice(0,str.length-1)
}
console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
const checkStart = (a, b) => {
    return a.toLowerCase().includes(b)
}
const checkStart1 = (a, b) => {
    return a.toLowerCase().startsWith(b)
}
const checkStart2 = (a, b) => {
    return !a.toLowerCase().indexOf(b,0)
}
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString = (a,b) =>{
    // return a.slice(0,b)+'...'
    return `${a.slice(0,b)}...`
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
const getMinLengthWord = (a) => {
    return (a === '') ? null : a.split(' ').sort((a, b) => a.length - b.length)[0]
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase = (a) => {
    return a.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

const isIncludes = (a, b) => {
    const aLow = a.toLowerCase()
    const bLow = b.toLowerCase()
    let res = true
    for (let i = 0; i < b.length; i++) {
        if (!aLow.includes(bLow[i])) {
            res = false
        }
    }
    return res
}
console.log(isIncludes("Incubator", "Cut")) // true
console.log(isIncludes("Incubator", "table")) // false
console.log(isIncludes("Incubator", "inbba")) // true
console.log(isIncludes("Incubator", "inba")) // true
console.log(isIncludes("Incubator", "Incubatorrr"))// true





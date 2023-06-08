const students = [
    {name: "Bob", age: 22, isMarried: true, scores: 85,},
    {name: "Alex", age: 21, isMarried: true, scores: 90,},
    {name: "Nick", age: 20, isMarried: false, scores: 120,},
    {name: "John", age: 19, isMarried: false, scores: 100,},
    {name: "Helen", age: 20, isMarried: false, scores: 110,},
    {name: "Ann", age: 20, isMarried: false, scores: 105,},
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

// https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/

//1. Поверхностная копия student
const copyUser = {...user}
console.log(user === copyUser); // false
console.log(user.friends === copyUser.friends); // true

//2. Полная (глубокая) копия student
const deepCopyStudent = {...user, friends: [...user.friends]}
console.log(user === deepCopyStudent); // false
console.log(user.friends === deepCopyStudent.friends); //false

//3. Поверхностная копия students
const copyStudents = [...students]
console.log(students === copyStudents); //false
console.log(students[0] === copyStudents[0]); //true

//4*. Полная (глубокая) копия students
const deepCopyStudents = students.map(el=>({...el}))
console.log(students === deepCopyStudents); //false
console.log(students[0] === deepCopyStudents[0]); //false
console.log(students);
console.log(deepCopyStudents);

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
let bestScoresStudents = [...students].sort((a,b)=>b.scores-a.scores)
console.log(bestScoresStudents===students)
console.log(bestScoresStudents)

//5a. Отсортируйте студентов по алфавиту
function sortByName(a, b) {
    if (a.name>b.name) return 1
    if (a.name<b.name) return -1
    return 0
} // 1 способ
function sortByName2(a, b) {
    return a.name.localeCompare(b.name)
} // 2 способ
function sortByName3(a, b) {
    return a.name > b.name ? 1 : -1
} // 3 способ

// const sortedByName = [...students].sort(sortByName)
// const sortedByName = [...students].sort(sortByName2)
const sortedByName = [...students].sort(sortByName3)
console.log(sortedByName===students)
console.log(sortedByName)

//6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter(el => el.scores >= 100)
console.log(bestStudents);
console.log(bestStudents === students) // false

//6a.Сформируйте массив из трёх лучших студентов
let topStudents = deepCopyStudents.sort((a,b)=>b.scores-a.scores).splice(0,3)
console.log(topStudents);
console.log(deepCopyStudents)

// 6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки
let newDeepCopyStudents = [...topStudents,...deepCopyStudents]
console.log(newDeepCopyStudents);

//7. Сформируйте массив холостых студентов
const notMarriedStudents = students.filter(el=>!el.isMarried)
    console.log(notMarriedStudents);

//8. Сформируйте массив имён студентов
const studentsNames = students.map(el => el.name)
console.log(studentsNames);

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой
const nameWithSpace = studentsNames.join(' ')
console.log(nameWithSpace); // Bob Alex Nick John Helen Ann
const namesWithComma = studentsNames.join(',')
console.log(namesWithComma); // Bob,Alex,Nick,John,Helen,Ann

//9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map(el => ({...el, isStudent: true}))
console.log(trueStudents);

//10. Nick женился. Выполните преобразование массива students
const studentsWithMarriedNick = students.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el)
console.log(studentsWithMarriedNick);

//11. Найдите Студентку по имени Ann
// const ann = students.find(item => item.name === 'Ann')
const ann = students.filter(el=>el.name==='Ann')
console.log(ann);
console.log(students);

//12. Найдите студента с самым высоким баллом
// const bestStudent = [...students].sort((a, b) => b.scores - a.scores).splice(0,1)
const bestStudent = students.reduce((acc, item) => acc.scores < item.scores ? item : acc)
console.log(bestStudent);
console.log(students)

//12a. Найдите 2 студента с самым высоким баллом
const bestStudent2 = [...students].sort((a, b) => b.scores - a.scores).splice(1,1)
console.log(bestStudent2);
console.log(students)

//13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, item) => acc + item.scores,0)
console.log(scoresSum);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом
// добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных
// студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    const studentsNames = students.map(el => el.name)
    return students.map(el=>{
        return {...el, friends: studentsNames.filter(n=>n!==el.name)}
    })
}
console.log(addFriends(students));

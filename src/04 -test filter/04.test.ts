import {CoursesType} from "./04";

test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age =>  age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {

    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]

    // const chipPredicate = (courses: CoursesType) => {
    //     return courses.price < 160
    // }

    // const chipCouses = courses.filter(chipPredicate)

    const chipCouses = courses.filter(courses => courses.price < 160)

    expect(chipCouses.length).toBe(2)
})

test('get only completed tasts', ()=>{
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'solt', isDone: false},
        {id: 4, title: 'sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
})
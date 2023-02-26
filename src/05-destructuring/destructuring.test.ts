test('',()=>{
    let props = {
        name:'Igor',
        age:32,
        lessons:[{title:'1'},{title:'2'}],
        street: {
            title: 'Marshala'
        }
    }

    // const age = props.age  // получение age
    // const lessons = props.lessons // получение lessons
    // const title = props.street.title // получение title
    const{age, lessons} = props // получение age и lessons через деструктурированное присваивание
    const{title}=props.street // получение title через деструктурированное присваивание


    const a = props.age
    const l = props.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

})
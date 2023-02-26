const user = {
    name: 'igor',
    age: 28,
    address: {
        city: {
            title: 'Perm'
        }
    }
}
// console.log(user.address.city.title) // Perm
// console.log(user['address']['city']['title']) // Perm

const user2 = {
    'name': 'igor',
    'age': 28,
    'address': {
        'city': {
            'title': 'Perm'
        }
    }
}
// console.log(user2['address']['city']['title']) // Perm

let a = {}
a.title = 'Perm' // Perm
// console.log(a.title)
a['citizenCount'] = 100
// console.log(a.citizenCount) // 100

let arr = ['Igor', 'Maria']
// console.log(arr['map'](el=>el.toUpperCase())) // [ 'IGOR', 'MARIA' ]
// ---------------------------------------------------------------------------------------
let arrObj = {
    '0': 'Igor',
    '1': 'Maria',
}
// console.log(arrObj.0) // ERROR!!
// console.log(arrObj."0") // ERROR!!
// console.log(arrObj['0']) // Igor
// console.log(arrObj[0]) // Igor - приводит ключ к строке
// arrObj[table]='red' // ERROR!!
arrObj['table color'] = 'red' // ERROR!!
// console.log(arrObj) // { '0': 'Igor', '1': 'Maria', 'table color': 'red' }
// console.log(arrObj.'table color') // ERROR!!
// console.log(arrObj[table color]) // ERROR!!
// console.log(arrObj['table color']) // red
arrObj[null] = 'undef' // null превратится в строку null
// console.log(arrObj) // { '0': 'Igor', '1': 'Maria', 'table color': 'red', null: 'undef' }
arrObj[{}] = 'hello'
// console.log(arrObj)  // { '0': 'Igor', '1': 'Maria', 'table color': 'red', null: 'undef', '[object Object]': 'hello'}
// console.log({}.toString()) // [object Object]
// console.log({'name':'igor'}.toString()) // [object Object]
arrObj[ {'name':'igor', toString(){return 'bla'}} ] = 'blabla'
console.log(arrObj.bla) // blabla
// ---------------------------------------------------------------------------------------

// итерация по объекту как по массиву
let names = {
    '0': 'Igor',
    '1': 'Maria',
    '2': 'Leha',
}
// console.log(Object.keys(names)) // [ '0', '1', '2' ]
// console.log(Object.values(names)) // [ 'Igor', 'Maria', 'Leha' ]
// console.log(Object.values(names).map(el=>el.toUpperCase())) // [ 'IGOR', 'MARIA', 'LEHA' ]




export const usersObj = {
    '0': 'Igor',
    '1': 'Masha',
    '2': 'Leha',
    '3': 'Miha',
}

type UsersType = {
    [key: string]: {id:number,name:string}
}

export const users:UsersType = {
    '101': {id: 101, name: 'Igor'},
    '11': {id: 11, name: 'Leha'},
    '122': {id: 122, name: 'Masha'},
    '1239': {id: 1239, name: 'Miha'},
}

const user = {id: 100500, name: 'Dima'}

// users[11] - найти элемент в id:11 - это быстро (О(1))
// users[user.id] = user - - добавить user в массив. Если user уже есть, то просто перезатрется
// delete users[user.id] - удаление user
// users[user.id].name = 'Vitya' - изменение

export const usersArray = [
    {id: 101, name: 'Igor'},
    {id: 11, name: 'Leha'},
    {id: 122, name: 'Masha'},
    {id: 1239, name: 'Miha'},
]

// const usersCopy = [...usersArray.filter(), user] - добавить user. Перед этим
//        нужно отфильтровать массив, чтоб узнать нет ли уже такого user
// usersArray.find(el=>el.id===11) - найти элемент в id:11 - это долго (О(n))
// usersArray.filter(el=> el.id !== user.id) - удаление user


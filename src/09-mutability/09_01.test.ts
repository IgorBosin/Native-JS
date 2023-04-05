type UserType = {
    name: string
    age: number
}

function increaseAge(u: UserType) {
    u.age++
}

test('reference type test', () => {

    let user = {
        name: 'Igor',
        age: 28
    }

    increaseAge(user)

    expect(user.age).toBe(29)

    const superman = user

    superman.age = 100

    expect(user.age).toBe(100)

})

test('array reference test', () => {

    let users = [
        {
            name: 'Igor',
            age: 28
        },
        {
            name: 'Maria',
            age: 21
        },
    ]

    let admins = users

    admins.push({name: 'Leha', age: 25})

    expect(users[2]).toEqual({name: 'Leha', age: 25})
})

test('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount

    adminsCount = 101

    expect(usersCount).toBe(100)
})

test('reference type test', () => {

    const address = {
        title: 'Perm'
    }

    let user = {
        name: 'Igor',
        age: 28,
        address: address
    }

    let user2 = {
        name: 'Miha',
        age: 30,
        address: address,
    }

    user2.address.title = 'Moskow'

    expect(user.address.title).toBe('Moskow')
    expect(address.title).toBe('Moskow')

})

test('reference type array test', () => {

    const address = {
        title: 'Perm'
    }

    let user = {
        name: 'Igor',
        age: 28,
        address: address
    }
    let user2 = {
        name: 'Miha',
        age: 30,
        address: address,
    }

    const users = [user, user2, {name:'Maria', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Igorek'

    expect(users[0].name).toBe('Igorek')
    expect(user.name).toBe('Igorek')

})

test('sort array test', () => {
    const letters = ['c', 'd', 'a']

    passportist(letters)

    expect(letters).toEqual(['a', 'c', 'd'])
})

function passportist  (letters: any) {
    letters.sort()
}
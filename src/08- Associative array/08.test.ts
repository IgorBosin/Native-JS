type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Igor'},
        '11': {id: 11, name: 'Leha'},
        '122': {id: 122, name: 'Masha'},
        '1239': {id: 1239, name: 'Miha'},
    }
})

test('should update corresponding user', () => {
    users['122'].name = 'Maria'
    expect(users['122'].name).toBe(('Maria'))
    expect(users['122']).toEqual({id: 122, name: 'Maria'})

})
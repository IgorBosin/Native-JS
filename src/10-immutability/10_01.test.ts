import {
    addCompanyToUser,
    addNewBooksToUser, CompanyType2,
    makeHairstyle,
    moveUser,
    removeBookToUser,
    SkillsUser,
    updateBookToUser,
    updateCompanyToUser,
    updateCompanyToUser2,
    updateSkillsToUser,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompanies
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'}
    }
    const awesomeUser: UserType = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'},
        laptop: {title: 'MSI'}
    }
    const movedUser: UserWithLaptopType = moveUser(user, 'Moscow')

    expect(user.address.title).toBe('Perm')
    expect(movedUser.address.title).toBe('Moscow')
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to Macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'},
        laptop: {title: 'MSI'}
    }
    const upgradeLaptopToMac: UserWithLaptopType = upgradeLaptop(user, 'Macbook')

    expect(user.laptop.title).toBe('MSI')
    expect(upgradeLaptopToMac.laptop.title).toBe('Macbook')
    expect(user).not.toBe(upgradeLaptop)
    expect(user.laptop).not.toBe(upgradeLaptopToMac.laptop)
    expect(user.address).toBe(upgradeLaptopToMac.address)
})

test('add books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'},
        laptop: {title: 'MSI'},
        books: ['CSS', 'JS', 'HTML']
    }
    const addNewBooks = addNewBooksToUser(user, ['TS', 'REACT'])

    expect(addNewBooks.books.length).toBe(5)
    expect(addNewBooks.books[4]).toBe('REACT')
    expect(user.books).not.toBe(addNewBooks.books)
    expect(user.laptop).toBe(addNewBooks.laptop)
    expect(user.address).toBe(addNewBooks.address)
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'},
        laptop: {title: 'MSI'},
        books: ['CSS', 'JS', 'HTML']
    }
    const updateBook = updateBookToUser(user, 'JS', 'TS')

    expect(updateBook.books.length).toBe(3)
    expect(updateBook.books[1]).toBe('TS')
    expect(user.books[1]).toBe('JS')
    expect(user.books).not.toBe(updateBook.books)
    expect(user.laptop).toBe(updateBook.laptop)
    expect(user.address).toBe(updateBook.address)
})

test('update skills JS', () => {
    let user: SkillsUser = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'},
        laptop: {title: 'MSI'},
        books: ['CSS', 'JS', 'HTML'],
        skills: [13, 21, 56],
    }
    const updateSkills = updateSkillsToUser(user, 13, 17)

    expect(updateSkills.skills.length).toBe(3)
    expect(updateSkills.skills[0]).toBe(17)
    expect(user.skills[0]).toBe(13)
    expect(user.skills).not.toBe(updateSkills.skills)
    expect(user.laptop).toBe(updateSkills.laptop)
    expect(user.address).toBe(updateSkills.address)
})

test('remove book JS', () => {
    let user: SkillsUser = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'},
        laptop: {title: 'MSI'},
        books: ['CSS', 'JS', 'HTML'],
        skills: [13, 21, 56],
    }
    const updateSkills = removeBookToUser(user, 'JS')

    expect(updateSkills.books.length).toBe(2)
    expect(user.books.length).toBe(3)
    expect(user.books[1]).toBe('JS')
    expect(updateSkills.books[1]).toBe('HTML')
    expect(user.books).not.toBe(updateSkills.books)
    expect(user.skills).toBe(updateSkills.skills)
    expect(user.laptop).toBe(updateSkills.laptop)
    expect(user.address).toBe(updateSkills.address)
})

test('add company', () => {
    let user: SkillsUser & WithCompanies = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'},
        laptop: {title: 'MSI'},
        books: ['CSS', 'JS', 'HTML'],
        skills: [13, 21, 56],
        companies: [
            {id: 1, title: 'google'},
            {id: 2, title: 'yandex'},
        ]
    }
    const addCompany = addCompanyToUser(user, 'JS')

    expect(addCompany.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)
    expect(addCompany.companies[2].id).toBe(3)
    expect(user.books).toBe(addCompany.books)
    expect(user.skills).toBe(addCompany.skills)
    expect(user.laptop).toBe(addCompany.laptop)
    expect(user.address).toBe(addCompany.address)
})

test('update company', () => {
    let user: SkillsUser & WithCompanies = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Perm'},
        laptop: {title: 'MSI'},
        books: ['CSS', 'JS', 'HTML'],
        skills: [13, 21, 56],
        companies: [
            {id: 1, title: 'google'},
            {id: 2, title: 'yandex'},
        ]
    }
    const updateCompany = updateCompanyToUser(user, 'yandex', 'Novomet') as SkillsUser & WithCompanies
    // воспринимай как указанный тип, хотя в функцию передали только компании, т.е. она не знает что такое
    // books, skills и тд

    expect(updateCompany.companies.length).toBe(2)
    expect(updateCompany.companies[1].title).toBe('Novomet')
    expect(user.books).toBe(updateCompany.books)
    expect(user.skills).toBe(updateCompany.skills)
    expect(user.laptop).toBe(updateCompany.laptop)
    expect(user.address).toBe(updateCompany.address)
    expect(user.companies).not.toBe(updateCompany.companies)
})

test('update company2', () => {
    let companies: CompanyType2 = {
        'Igor': [{id: 1, title: 'Google'}, {id: 2, title: 'Yandex'}],
        'Leha': [{id: 1, title: 'Novomet'}]
    }
    const updateCompany2: CompanyType2 = updateCompanyToUser2(companies, 'Igor', 2, 'Yahoo',)

    expect(updateCompany2['Igor'][1].title).toBe('Yahoo')
})
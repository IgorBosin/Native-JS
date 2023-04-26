export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = {
    books: string[]
}

export type UserWithSkillsType = {
    skills: number[]
}

export type SkillsUser = UserType & UserWithLaptopType & UserWithBooksType & UserWithSkillsType

export type ObjectCompanyType = { id: number, title: string };

export type WithCompanies = {
    companies: Array<ObjectCompanyType>
}

export type CompanyType2 = {
    [key: string]: ObjectCompanyType[]
}

export function makeHairstyle(u: UserType, power: number): UserType {
    // const copy = {...u}
    // copy.hair = copy.hair / power
    // return copy
    return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptopType, newCity: string): UserWithLaptopType {
    return {...u, address: {...u.address, title: newCity}}
}

export const upgradeLaptop = (u: UserWithLaptopType, newLaptop: string): UserWithLaptopType => {
    return {...u, laptop: {...u.laptop, title: newLaptop}}
}

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) => {
    return {...u, books: [...u.books, ...newBooks]}
}

export const updateBookToUser = (u: UserWithLaptopType & UserWithBooksType, previousBook: string, newBooks: string) => {
    return {...u, books: u.books.map(el => el === previousBook ? newBooks : el)}
}

export const updateSkillsToUser = (u: SkillsUser, previousSkills: number, newSkills: number): SkillsUser => ({
    ...u, skills: u.skills.map(el => previousSkills ? newSkills : el)
})

export const removeBookToUser = (u: SkillsUser, removeBook: string): SkillsUser => ({
    ...u, books: u.books.filter(el => el !== removeBook)
})

export const addCompanyToUser = (u: SkillsUser & WithCompanies, titleCompany: string) => ({
    ...u, companies: [...u.companies, {id: u.companies.length + 1, title: titleCompany}]
})

export const updateCompanyToUser = (u: WithCompanies, prevTitle: string, newTitleCompany: string) => ({
    ...u, companies: u.companies.map(el => el.title === prevTitle ? {...el, title: newTitleCompany} : el)
})

export const updateCompanyToUser2 = (companies: CompanyType2, userName: string, companyId: number, newTitle: string) => {
    return {...companies, [userName]: companies[userName].map(el => el.id === companyId ? {...el, title: newTitle} : el)}
}
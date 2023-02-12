const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]; // <90

export type CoursesType = {
    title: string
    price: number
}
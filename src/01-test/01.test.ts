import {sub, sum} from "./01";

let a: number
let b: number

beforeEach(() => {
    a = 5
    b = 10
})

test.skip('check sub', () => {
    let res = sub(a, b)

    b = b + 5

    let res2 = sub(a, b)

    expect(res).toBe(-5)
    expect(res2).toBe(-10)
})

test.skip('check sum', () => {
    let res = sum(a, b)

    expect(res).toBe(15)
})
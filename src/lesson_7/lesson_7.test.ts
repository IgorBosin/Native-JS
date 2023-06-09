import {ActionType, div, mult, salaryReducer, sub, sum} from "./lesson_7";

let salary:number

beforeEach(()=>{
    salary=100
})

test('sum', () => {
    const salary: number = 800
    const n: number = 200
    const result = sum(salary, n)
    expect(result).toBe(1000)
})
test('sub', () => {
    const salary = 1000
    const n = 300
    const res = sub(salary, n)
    expect(res).toBe(700)
})
test('div', () => {
    const salary = 600
    const n = 300
    const res = div(salary, n)
    expect(res).toBe(2)
})
test('mult', () => {
    const salary = 600
    const n = 2
    const res = mult(salary, n)
    expect(res).toBe(1200)
})
test('salaryReducerSUM', () => {
    const s = 1000
    const n: ActionType = {
        type: 'SUM',
        n: 200
    }
    const res = salaryReducer(s, n)
    expect(res).toBe(1200)
})
test('salaryReducerSUB',()=>{
    const s = 1000
    const n:ActionType = {
        type:'SUB',
        n:200
    }
    const res = salaryReducer(s,n)
    expect(res).toBe(800)
})
test('salaryReducerDIV',()=>{
    const s = 1000
    const n:ActionType = {
        type:'DIV',
        n:2
    }
    const res = salaryReducer(s,n)
    expect(res).toBe(500)
})
test('salaryReducerMULT',()=>{
    const nObj = {
        type:'MULT' as const,
        n:2
    }
    const res = salaryReducer(salary,nObj)
    expect(res).toBe(200)
})
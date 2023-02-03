import {cityType} from "../02-test/02";
import {addMoneyToBudget, demolishHousesOnTheStreet, repairHouse, toFireStaff, toHireStaff} from "./03";
let city: cityType
beforeEach(() => {
    city = {
        title: 'Perm',
        houses: [
            {buildedAt: 2012, repaired: false, address:
                    {number: 100, street:
                            {title: "white street"}}},
            {buildedAt: 2008, repaired: false, address:
                    {number: 100, street:
                            {title: 'happy street'}}},
            {buildedAt: 2020, repaired: false, address:
                    {number: 101, street:
                            {title: 'happy street'}}},
        ],
        governmentBuildings: [
            {type:'Hospital', budget:200000, staffCount:200, address:{street:{title:"central str"}} },
            {type:'FIRE-STATION', budget:500000, staffCount:1000, address:{street:{title:"SOUTH str"}} },
        ],
        citizenNumber: 100000
    }
})


test('Houses shold be destroyed', () => {
    demolishHousesOnTheStreet(city, 'happy street')
    // console.log(demolishHousesOnTheStreet(city, 'happy street'))

    expect(demolishHousesOnTheStreet.length).toBe(1)
    // expect(city.houses[0].id).toBe(1)
})

test.skip('House shold be repared',()=>{
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBe(true)
})

test.skip('stuff should be increased', ()=>{
    toFireStaff(city.governmentBuildings[0],20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test.skip('stuff should be repared', ()=>{
    toHireStaff(city.governmentBuildings[0],20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})
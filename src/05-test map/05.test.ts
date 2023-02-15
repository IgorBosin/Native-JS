import {cityType} from "../02-test object/02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05";

let city: cityType

beforeEach(() => {
    city = {
        title: 'Perm',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false, address:
                    {
                        number: 100, street:
                            {title: "white street"}
                    }
            },
            {
                id: 2, buildedAt: 2008, repaired: false, address:
                    {
                        number: 100, street:
                            {title: 'happy street'}
                    }
            },
            {
                id: 3, buildedAt: 2020, repaired: false, address:
                    {
                        number: 101, street:
                            {title: 'happy street'}
                    }
            },
        ],
        governmentBuildings: [
            {
                type: 'Hospital', budget: 200000, staffCount: 200, address: {
                    street: {title: "central str"}
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {
                    street: {title: "SOUTH str"}
                }
            },
        ],
        citizenNumber: 100000
    }
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("central str");
    expect(streetsNames[1]).toBe("SOUTH str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("white street");
    expect(streetsNames[1]).toBe("happy street");
    expect(streetsNames[2]).toBe("happy street");
})

test('create greating messages for streets', ()=>{
    let messages = createMessages(city.houses)

    expect(messages[0]).toBe('Hi white street')
    expect(messages[1]).toBe('Hi happy street')
    expect(messages[2]).toBe('Hi happy street')
})
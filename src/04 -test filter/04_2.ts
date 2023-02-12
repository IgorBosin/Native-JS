import {cityType, governmentBuildingsType} from "../02-test object/02";
import {city} from "../02-test object/02.test";

export function demolishHousesOnTheStreet(city: cityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildinsWithStaffCountGreaterThen(buildings: Array<governmentBuildingsType>, staffCount: number) {
    return buildings= city.governmentBuildings.filter((el)=>el.staffCount > staffCount)
    // return buildings.filter((el)=>el.staffCount > staffCount)
}

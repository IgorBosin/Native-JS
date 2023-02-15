import {cityType, governmentBuildingsType} from "../02-test object/02";
import {city} from "../02-test object/02.test";

export function demolishHousesOnTheStreet(cityFilt: cityType, street: string) {
    cityFilt.houses = cityFilt.houses.filter(h => h.address.street.title !== street)
}

export function getBuildinsWithStaffCountGreaterThen(buildings: Array<governmentBuildingsType>, staffCount: number) {
    return buildings= city.governmentBuildings.filter((el)=>el.staffCount > staffCount)
    // return buildings.filter((el)=>el.staffCount > staffCount)
}

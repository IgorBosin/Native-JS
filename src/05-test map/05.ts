import {governmentBuildingsType, houseType} from "../02-test object/02"

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: Array<governmentBuildingsType>) => {
   return governmentBuildings.map(el => el.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<houseType>) => {
    return houses.map(el=>el.address.street.title)
}

export const createMessages = (houses: Array<houseType>) => {
    return houses.map(el=> `Hi ${el.address.street.title}`)
}
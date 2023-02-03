import {cityType, houseType} from "../02-test/02";
import {city} from "../02-test/02.test";

type governmentBuildingsType = {
type:string,
    budget:number,
    staffCount:number,
    address:{street:{title:string}}

}

export const addMoneyToBudget = (hospitalInfo:governmentBuildingsType, newBudget:number) => {
    hospitalInfo.budget = hospitalInfo.budget + newBudget
}

export const demolishHousesOnTheStreet = (cityy: cityType, happyStreet: 'happy street'|"white street") => {
    return city.houses = cityy.houses.filter((filt) => {
        return filt.address.street.title !== happyStreet
    })
}

export const repairHouse = (house: houseType) => {
    house.repaired = true
}

export const toFireStaff = (governmentBuildingsType: governmentBuildingsType, number: number) => {
    governmentBuildingsType.staffCount -= number
}

export const toHireStaff = (governmentBuildingsType: governmentBuildingsType, number: number) => {
    governmentBuildingsType.staffCount += number
}
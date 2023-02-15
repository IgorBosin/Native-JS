import {cityType, houseType} from "../02-test object/02";
import {city} from "../02-test object/02.test";

type governmentBuildingsType = {
type:string,
    budget:number,
    staffCount:number,
    address:{street:{title:string}}

}

export const addMoneyToBudget = (hospitalInfo:governmentBuildingsType, newBudget:number) => {
    hospitalInfo.budget = hospitalInfo.budget + newBudget
}


export let demolishHousesOnTheStreet = (city: cityType, street: string) => {
   city.houses = city.houses.filter(filt => filt.address.street.title !== street)
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
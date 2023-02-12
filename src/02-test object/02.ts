export type streetType = {
    title: string
}

export type addressType = {
    number?:number
    street: streetType
}

export type houseType = {
    id?: number
    buildedAt:number
    repaired:boolean
    address:addressType
}

export type cityType ={
    title: string
    houses: Array<houseType>
    governmentBuildings: Array<governmentBuildingsType>
    citizenNumber: number
}

export type governmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: addressType
}



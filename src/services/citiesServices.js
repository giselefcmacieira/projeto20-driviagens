import { conflictError } from "../errors/conflict.js";
import { citiesRepository } from "../repositories/citiesRepository.js";

async function createCity(city) {
    const existingCity = await citiesRepository.getCityByName(city)
    console.log(existingCity)
    if(existingCity) {
        console.log('encontrou cidade repitida')
        throw conflictError("Cidade já existe")
    }
    return citiesRepository.insert(city)
}

export const citiesServices = {createCity}
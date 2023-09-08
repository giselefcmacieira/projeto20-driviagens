import { notFoundError } from "../errors/notFound.js"
import { flightsRepository } from "../repositories/flightsRepository.js"
import { passengersRepository } from "../repositories/passengersRepository.js"
import { travelsRepository } from "../repositories/travelsRepository.js"


async function createTravel(travel){
    //travel = {passengerId: 12, flightId: 8}
    const {passengerId, flightId} = travel
    const existingPassenger = await passengersRepository.getPassengerById(passengerId)
    if(existingPassenger === 0){
        throw notFoundError('Passageiro')
    }
    const existingFlight = await flightsRepository.getFlightById(flightId)
    if(existingFlight === 0){
        throw notFoundError('Viagem')
    }
    return travelsRepository.insert(travel)
}

export const travelsServices = { createTravel }
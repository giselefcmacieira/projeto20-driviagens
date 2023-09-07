import { passengersRepository } from "../repositories/passengersRepository.js"

function createPassenger(passenger) {
    return passengersRepository.insert(passenger)
}

export const PassengerService = { createPassenger }
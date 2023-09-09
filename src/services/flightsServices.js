import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import { badRequestError } from "../errors/badRequest.js";
import { conflictError } from "../errors/conflict.js";
import { notFoundError } from "../errors/notFound.js";
import { unprocessableEntityError } from "../errors/unprocessableEntity.js";
import { citiesRepository } from "../repositories/citiesRepository.js";
import { flightsRepository } from "../repositories/flightsRepository.js";

async function createFlight(flight){
    //flight = { origin: 1, destination: 5, date: "24-12-2023"}
    const {origin, destination, date} = flight
    dayjs.extend(customParseFormat)
    if(dayjs(date, "DD-MM-YYYY").valueOf() < dayjs().valueOf()){
        throw unprocessableEntityError('Data do voo antes da data atual')
    }
    if(origin === destination){
        throw conflictError('Origem e destino são iguais')
    }
    const existingOrigin = await citiesRepository.getCityById(origin)
    if(existingOrigin === 0){
        throw notFoundError('Cidade de origem')
    }
    const existingDestination = await citiesRepository.getCityById(destination)
    if(existingDestination === 0){
        throw notFoundError('Cidade de destino')
    }
    return flightsRepository.insert(flight)
}

async function readFlights(flight){
    //flight = {origin, destination, bigger-date, smaller-date}
    const { origin, destination, 'bigger-date': biggerDate, 'smaller-date': smallerDate} = flight;
    if(!biggerDate && smallerDate){
        throw unprocessableEntityError('A data maior deve ser passado junto com a data menor')
    }
    if(biggerDate && !smallerDate){
        throw unprocessableEntityError('A data menor deve ser passada junto com a data maior')
    }
    dayjs.extend(customParseFormat)
    if(dayjs(biggerDate, "DD-MM-YYYY").valueOf() < dayjs(smallerDate, "DD-MM-YYYY").valueOf()){
        throw badRequestError('A data maior deve obrigatoriamente ser maior que a data menor')
    }
    return flightsRepository.getFlights(flight)
}

export const flightsServices = {createFlight, readFlights}
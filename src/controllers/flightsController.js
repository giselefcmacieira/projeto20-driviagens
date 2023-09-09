import httpStatus from "http-status";
import { flightsServices } from "../services/flightsServices.js";

export async  function postFlight(req, res){
    await flightsServices.createFlight(req.body)
    res.status(httpStatus.CREATED).send('Voo criado com sucesso!')
}

export async function getFlights(req, res){
    console.log(req.query)
    const flights = await flightsServices.readFlights(req.query)
    res.status(httpStatus.OK).send(flights)
}
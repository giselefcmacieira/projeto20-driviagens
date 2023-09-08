import httpStatus from "http-status";
import { flightsServices } from "../services/flightsServices.js";

export async  function postFlight(req, res){
    await flightsServices.createFlight(req.body)
    res.status(httpStatus.CREATED).send('Voo criado com sucesso!')
}
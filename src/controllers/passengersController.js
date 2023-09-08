import httpStatus from "http-status";
import { PassengerService } from "../services/passengersServices.js";


export async function postPassenger(req, res){
    await PassengerService.createPassenger(req.body)
    res.status(httpStatus.CREATED).send("Passageiro criado com sucesso!")
}
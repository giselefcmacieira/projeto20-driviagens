import { PassengerService } from "../services/passengersServices.js";


export async function postPassenger(req, res){
    await PassengerService.createPassenger(req.body)
    res.status(201).send("Passageiro criado com sucesso!")
}
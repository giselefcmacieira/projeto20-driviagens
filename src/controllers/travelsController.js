import httpStatus from "http-status";
import { travelsServices } from "../services/travelsServices.js";

export async function postTravel(req, res){
    await travelsServices.createTravel(req.body)
    res.status(httpStatus.CREATED).send('Viagem criada com sucesso!')
}

export async function getTravels(req, res){
    const travels = await travelsServices.readTravels(req.query)
    res.status(httpStatus.OK).send(travels)
}
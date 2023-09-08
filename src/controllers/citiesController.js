import httpStatus from "http-status";
import { citiesServices } from "../services/citiesServices.js";

export async function postCity(req, res){
    await citiesServices.createCity(req.body)
    res.status(httpStatus.CREATED).send(`Cidade criada com sucesso`)
}
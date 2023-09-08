import { Router } from "express";
import { postCity } from "../controllers/citiesController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import citySchema from "../schemas/citySchema.js";

const citiesRouter = Router();

citiesRouter.post('/cities', validateSchema(citySchema), postCity)

export default citiesRouter
import { Router } from "express";
import { postFlight } from "../controllers/flightsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import flightSchema from "../schemas/flightSchema.js";


const flightsRouter = Router()

flightsRouter.post('/flights', validateSchema(flightSchema), postFlight)

export default flightsRouter
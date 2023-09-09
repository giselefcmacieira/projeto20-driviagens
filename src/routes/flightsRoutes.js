import { Router } from "express";
import { getFlights, postFlight } from "../controllers/flightsController.js";
import { validateDates } from "../middlewares/validateDates.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import flightSchema from "../schemas/flightSchema.js";


const flightsRouter = Router()

flightsRouter.post('/flights', validateSchema(flightSchema), postFlight)

flightsRouter.get('/flights', validateDates, getFlights)

export default flightsRouter
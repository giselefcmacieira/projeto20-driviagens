import { Router } from "express";
import { postPassenger } from "../controllers/passengersController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import passengerSchema from "../schemas/passengerSchema.js";



const passengerRouter = Router();

passengerRouter.post('/passengers', validateSchema(passengerSchema), postPassenger)

export default passengerRouter
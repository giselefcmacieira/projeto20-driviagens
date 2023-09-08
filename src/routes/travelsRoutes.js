import { Router } from "express";
import { postTravel } from "../controllers/travelsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import travelSchema from "../schemas/travelsSchema.js";

const travelsRouter = Router()

travelsRouter.post('/travels', validateSchema(travelSchema), postTravel)

export default travelsRouter
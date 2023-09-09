import { Router } from "express";
import { getTravels, postTravel } from "../controllers/travelsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import travelSchema from "../schemas/travelsSchema.js";

const travelsRouter = Router()

travelsRouter.post('/travels', validateSchema(travelSchema), postTravel)

travelsRouter.get('/passengers/travels', getTravels)

export default travelsRouter
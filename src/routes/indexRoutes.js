import { Router } from "express";
import citiesRouter from "./citiesRoutes.js";
import flightsRouter from "./flightsRoutes.js";
import passengerRouter from "./passengersRoutes.js";

const router = Router();

router.use(passengerRouter)
router.use(citiesRouter)
router.use(flightsRouter)

export default router
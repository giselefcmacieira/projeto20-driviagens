import { Router } from "express";
import citiesRouter from "./citiesRoutes.js";
import passengerRouter from "./passengersRoutes.js";



const router = Router();

router.use(passengerRouter)
router.use(citiesRouter)

export default router
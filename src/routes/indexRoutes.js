import { Router } from "express";
import passengerRouter from "./passengersRoutes.js";



const router = Router();

router.use(passengerRouter)

export default router
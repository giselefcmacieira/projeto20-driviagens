import JoiDate from "@joi/date"
import Joi from "joi"

//body = { origin: 1, destination: 5, date: "24-12-2023"}

const flightSchema = Joi.object({
    origin: Joi.number().integer().required(),
    destination: Joi.number().integer().required(),
    date: Joi.extend(JoiDate).date().format('DD-MM-YYYY').required()
})

export default flightSchema
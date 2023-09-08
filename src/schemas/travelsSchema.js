import Joi from "joi"

//body= {passengerId: 12, flightId: 8}

const travelSchema = Joi.object({
    passengerId: Joi.number().integer().required(),
    flightId: Joi.number().integer().required()
})

export default travelSchema
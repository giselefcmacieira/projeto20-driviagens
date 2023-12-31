import Joi from "joi";

//body: { firstName: "Joana", lastName: "Alves"}

const passengerSchema = Joi.object({
    firstName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required()
})

export default passengerSchema
import { unprocessableEntityError } from "../errors/unprocessableEntity.js";
import dateSchema from "../schemas/dateSchema.js";


export function validateDates(req, res, next){
    const {'bigger-date': biggerDate, 'smaller-date': smallerDate} = req.query
    const obj = {
        biggerDate,
        smallerDate
    }
    const validation = dateSchema.validate(obj, {abortEarly: false})
    if(validation.error){
        const errors = validation.error.details.map(detail => detail.message)
            throw unprocessableEntityError(errors)
    }
    next()
}
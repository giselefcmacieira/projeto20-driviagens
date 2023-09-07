import { invalidBodyError } from "../errors/invalidBody.js";

export function validateSchema (schema){
    return (req, res, next) => {
        const validation = schema.validate(req.body, {abortEarly: false});
        if(validation.error){
            const errors = validation.error.details.map(detail => detail.message);
            throw invalidBodyError(errors)
        }
    next();
    //return res.send('foi')
    }
}
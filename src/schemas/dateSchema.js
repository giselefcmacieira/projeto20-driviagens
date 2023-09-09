import Joi from "joi";
import JoiDate from "@joi/date"

//{date: 'DD-MM-YYYY'}

const dateSchema = Joi.object({
    smallerDate: Joi.extend(JoiDate).date().format('DD-MM-YYYY'),
    biggerDate: Joi.extend(JoiDate).date().format('DD-MM-YYYY')
})

export default dateSchema
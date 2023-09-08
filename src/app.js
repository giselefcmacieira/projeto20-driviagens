import express from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routes/indexRoutes.js"
import errorHandler from "./middlewares/error-middleware.js"
//import dayjs from "dayjs"
//import customParseFormat from 'dayjs/plugin/customParseFormat.js';

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.use(errorHandler);

const port = process.env.PORT || 5000
app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`)
})
/* dayjs.extend(customParseFormat)
console.log(dayjs("24-10-2023", "DD-MM-YYYY").valueOf())
console.log(dayjs().valueOf())
console.log(dayjs("24-12-2023", "DD-MM-YYYY").valueOf() < dayjs().valueOf()) */
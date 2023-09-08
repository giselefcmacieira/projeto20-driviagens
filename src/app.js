import express from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routes/indexRoutes.js"
import errorHandler from "./middlewares/error-middleware.js"


const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.use(errorHandler);

const port = process.env.PORT || 5000
app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`)
})
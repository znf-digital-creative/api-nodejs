import express, {Request, Response} from "express"
import router from "./routes/Routes"
import dotenv from "dotenv"
const app = express()
dotenv.config()
const port = process.env.APP_PORT
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({
        response : "Express Runing"
    })
})
app.use(router)

app.listen(port, ()=> {
    console.log(`Running on Port ${port}`)
})
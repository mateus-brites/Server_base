import express, { response } from 'express'
import { myDataSource } from "./app-data-source"

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


const app = express();
app.use(express.json())

app.get('/',(request, response) => {
    return response.json({message: 'Bem vindo'})
})

app.listen(3333, () => console.log('server is runnig in https://localhost:3333/'))
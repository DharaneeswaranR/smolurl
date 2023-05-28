import express from 'express'
import bodyParser from 'body-parser'
import "./db/mongoose.js"
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import apiRouter from './routers/api.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const publicDir = join(__dirname, '../public')

const app = express()

app.use('/', express.static(publicDir))
app.use(bodyParser.json())
app.use(apiRouter)

app.listen(process.env.PORT, () => {
    console.log('Server started on port ' + process.env.PORT)
})


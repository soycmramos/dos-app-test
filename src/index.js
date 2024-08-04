import express from 'express'
import dos from './dos.js'

const app = express()

// settings
app.set('port', process.env.PORT || 5000)
app.set('json spaces', 2)

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.get('/dos', dos)
app.get('/', (req, res) => res.json({ msg: 'DOS Online!' }))

app.listen(5000)

export default app

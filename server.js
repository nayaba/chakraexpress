const express = require('express')
const cors = require('cors')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()

const cupcakeController = require('./controllers/CupcakeController')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/middleware', (req, res, next) => {
  console.log('this is middleware')
  next()
}, (req, res) => res.send('response completed'))

app.get('/', (req, res) => {
  res.send('Did it work?')
})
app.get('/cupcakes', cupcakeController.getCupcakes)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
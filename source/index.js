const bamxRoute = require('./routes/bamx.route.js')

//* REQUIRES //
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

//* SERVER //
const app = express()

//* SETTINGS //
app.set('port', process.env.PORT || 3000)

//* MIDDLEWARES //
// Console log
app.use(morgan('dev'))

// CORS
app.use(cors())

// JSON
app.use(express.json())

// URL encoded
app.use(express.urlencoded({ extended: true }))

//* ROUTES //
app.use('/', bamxRoute)

//* STARTING THE SERVER //
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
  console.log(`Key token: ${app.get('llavetoken')}`)
})
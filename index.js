const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const employees = require('./routes/employee.js')
const user = require('./routes/user.js')

const app = express()
const port = 3000


mongoose.connect('mongodb://old-pond-22:0fed39e952@157.230.82.147:27017/database22?authSource=database22',{ useNewUrlParser: true }).then( () => {
  app.use("/static",express.static(path.join(__dirname, 'public')))

  app.use('/api',employees)
  app.use('/user',user)


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})


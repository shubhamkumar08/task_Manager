const express = require('express')


const { db } = require('./db')
const taskRoute = require('./routes/task')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/tasks', taskRoute)

db.sync()
  .then(() => {
    app.listen(process.env.PORT || 3333)
  })
  .catch((err) => {
    console.error(err)
  })
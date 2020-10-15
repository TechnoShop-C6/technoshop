//create a server with express
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(express.static(__dirname + '/client/dist'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//database connection 


//crud operation 



//server listening
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }) 
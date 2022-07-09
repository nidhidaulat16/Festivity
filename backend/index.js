const connectToMongo = require('./db');
const express = require('express');
const Razorpay = require('razorpay');
var cors = require ('cors')

connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/history',require('./routes/history'))
app.use('/api/info',require('./routes/info'))
app.use('/api/product',require('./routes/product'))
app.use('/api/wishlist',require('./routes/wishlist'))

app.listen(port, () => {
  console.log(`Festivity app listening at http://localhost:${port}`)
})
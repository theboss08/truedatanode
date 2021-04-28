const express = require('express')
const { rtConnect, rtSubscribe, rtUnsubscribe, rtFeed, historical, formatTime } = require('truedata-nodejs')

const user = 'wssand018'
const pwd = 'priya018';
const port = 8084

const symbols = ['NIFTY-I', 'BANKNIFTY-I', 'CRUDEOIL-I'];


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

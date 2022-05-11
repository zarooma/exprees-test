const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi how you doing')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${3000}`)
})

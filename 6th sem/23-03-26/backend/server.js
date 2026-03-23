const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log('Login attempt:', { username, password })
  
  res.json({ message: 'Login received', username })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
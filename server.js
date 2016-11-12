const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'The Haumea Programming Language'
  })
})

app.use(express.static('dist'))
app.use(express.static('assets'))

app.listen(7000, () => console.log('Listening on http://localhost:7000'))

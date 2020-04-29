const express = require('express')
const bodyParser = require('body-parser')
const { getAllVillains, getVillainBySlug, createNewVillain } = require('./controllers/villains')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getVillainBySlug)

app.post('/villains', bodyParser.json(), createNewVillain)

app.all('*', (request, response) => response.status(404).send('Page Not Found'))

app.listen(2319, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 2319...')
})

const path       = require('path')
const express    = require('express')
const bodyParser = require('body-parser')
const Chatkit    = require('pusher-chatkit-server')

const app = express()
const chatkit = new Chatkit.default(require({
    instanceLocator: "v1:us1:f1e97e70-2ad9-4984-879d-56bd5f90699c",
    key: "42179b09-1889-4cea-ba60-c977b3aba533:hjMKjY8vNdgc0i8POkwbHRTCeritVFjEAiVeLu1bLaQ="
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/views'})
})

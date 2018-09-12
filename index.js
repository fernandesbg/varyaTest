const path       = require('path')
const express    = require('express')
const bodyParser = require('body-parser')
const Chatkit    = require('pusher-chatkit-server')

const app = express()
const chatkit = new Chatkit.default(require({
    instanceLocator: "PUSHER_CHATKIT_INSTANCE_LOCATOR",
    key: "PUSHER_CHATKIT_KEY"
}))

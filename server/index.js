import bunyan from 'bunyan'
import config from 'ezconf'
import express from 'express'
import expressBunyanLogger from 'express-bunyan-logger'
import bodyParser from 'body-parser'

const jsonBodyParser = bodyParser.json()

const log = bunyan.createLogger({
	name: 'github-webhooks-experiment',
	serializers: bunyan.stdSerializers
})

const app = express()

app.use(jsonBodyParser)
app.use(expressBunyanLogger())

app.get('/', function(req, res) {
	res.send('Hello!')
})

app.post('/github', function(req, res) {
	res.send(req.body)
})

log.info('Starting server.')
const server = app.listen(config.port, function() {
	log.info({ address: server.address() }, 'Started server.')
})

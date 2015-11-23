import bunyan from 'bunyan'
import koa from 'koa'
import koaBunyanLogger from 'koa-bunyan-logger'

const port = 3000

const log = bunyan.createLogger({
	name: 'github-webhooks-experiment',
	serializers: bunyan.stdSerializers
})

const app = koa()

app.use(koaBunyanLogger(log))
app.use(koaBunyanLogger.requestLogger())

app.use(function *() {
	this.body = 'Hello World'
})

log.info('Starting server.')
const server = app.listen(port, function() {
	log.info({ address: server.address() }, 'Started server.')
})

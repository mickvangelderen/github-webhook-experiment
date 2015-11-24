import bunyan from 'bunyan'
import config from 'ezconf'
import koa from 'koa'
import koaBodyParser from 'koa-bodyparser'
import koaBunyanLogger from 'koa-bunyan-logger'
import koaMount from 'koa-mount'
import koaRouter from 'koa-router'

const log = bunyan.createLogger({
	name: 'github-webhooks-experiment',
	serializers: bunyan.stdSerializers
})

const app = koa()

// Add logger.
app.use(koaBunyanLogger(log))
app.use(koaBunyanLogger.requestLogger())

// Add routes.
const router = new koaRouter()

router.post('/github', function*() {
	this.body = 'default response'
})

console.log(router.routes())

app
  .use(router.routes())
  .use(router.allowedMethods());

// Start server.
log.info('Starting server.')
const server = app.listen(config.port, function() {
	log.info({ address: server.address() }, 'Started server.')
})

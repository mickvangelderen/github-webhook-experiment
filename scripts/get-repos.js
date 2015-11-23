import { pluck } from 'ramda'
import github from '../lib/github'
import logPromise from '../lib/log-promise'

const repos = github('/user/repos').then(({ body }) => body)

repos.then(pluck('name')).then(log, log)

logPromise('repos', repos)

function log(thing) {
	console.log(thing)
}

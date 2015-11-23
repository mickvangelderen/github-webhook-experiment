import { pluck } from 'ramda'
import github from './lib/github'
import logPromise from './lib/log-promise'

const user = github('/user').then(({ body }) => body)
const repos = github('/user/repos').then(({ body }) => body)

repos.then(pluck('name')).then(log, log)

logPromise('user', user)
logPromise('repos', repos)

function log(thing) {
	console.log(thing)
}

import github from '../lib/github'
import logPromise from '../lib/log-promise'

const user = github('/user').then(({ body }) => body)

user.then(log, log)

logPromise('user', user)

function log(thing) {
	console.log(thing)
}

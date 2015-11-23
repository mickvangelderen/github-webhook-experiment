import config from 'ezconf'
import requestPromise from 'request-promise'

export default requestPromise.defaults({
	resolveWithFullResponse: true,
	baseUrl: 'https://api.github.com/',
	json: true,
	headers: {
		authorization: 'Bearer ' + config.github.TOKEN,
		'user-agent': 'mickvangelderen',
		accept: 'application/vnd.github.v3+json'
	}
})

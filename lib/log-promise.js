import { writeFileAsync } from './fs'
import { join, extname } from 'path'

module.exports = function(name, promise) {
	const handler = data => {
		const content = JSON.stringify(data, null, 4)
		const path = join(__dirname, '..', 'ignore', name + '.json')
		return writeFileAsync(path, content).then(() => content)
	}
	return promise.then(handler, handler)
}

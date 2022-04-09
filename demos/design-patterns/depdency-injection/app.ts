import http, { RequestListener } from 'http'
import { UserModule } from './user.module'

const handleHttpListen: RequestListener = (request, response) => {
	response.end('ok')
}
http.createServer(handleHttpListen).listen(4000)
console.log('server is running on 4000')

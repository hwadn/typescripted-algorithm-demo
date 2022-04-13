import http, { RequestListener } from 'http'
import { UserModule } from './user.module'
import { UserController } from './user.controller'
import { generateRoutes } from './helpers/generateRoutes'
import { UserService } from './user.service'

// TODO dependence injection
const user = new UserController(new UserService())

const routes = generateRoutes(user)

const handleHttpListen: RequestListener =async (request, response) => {
  const { method, url } = request
  const route = routes.find(item => item.method === method && item.path === url)

  if (route) {
    const handler = route?.handler
    const data = await handler()
    response.end(JSON.stringify(data))
  }
  response.end()
}
http.createServer(handleHttpListen).listen(4000)
console.log('server is running on 4000')

import { UserController } from './user.controller'
import { UserService } from './user.service'
import http, { RequestListener } from 'http'

// class decorator
function classDecorator () {
  return (target: unknown) => {
    console.log('ok')
    return target
  }
}

class Fish {
  swim() {
    console.log('i swim')
  }
}

const fish = new Fish()
fish.swim()


const handleHttpListen: RequestListener = (request, response) => {

}
http.createServer(handleHttpListen).listen(4000)
console.log('server is running on 4000')

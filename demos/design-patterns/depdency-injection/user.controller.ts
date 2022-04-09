import { UserService } from './user.service'
import { Get } from './decorators'

export class UserController {
	constructor (private readonly userService: UserService){}

	@Get('users')
	listUsers () {
		return this.userService.listUsers()
	}
}

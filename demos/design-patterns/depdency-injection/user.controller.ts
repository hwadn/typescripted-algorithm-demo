import { UserService } from './user.service'
import { Get, Controller } from './decorators'


@Controller('user')
export class UserController {
	constructor (private readonly userService: UserService){}

	@Get('/list')
	listUsers () {
		return this.userService.listUsers()
	}
}

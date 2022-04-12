import { UserService } from './user.service'
import { Get, Controller } from './decorators'


@Controller('user')
export class UserController {
	constructor (private readonly userService: UserService){}

	@Get('list')
	listUsers () {
    return { data: [{ name: 'dd' }] }
		// return this.userService.listAllUsers()
	}
}

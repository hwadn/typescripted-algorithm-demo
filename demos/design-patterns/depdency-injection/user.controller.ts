import { UserService } from './user.service'
import { Get, Controller } from './decorators'
import { Inject } from './decorators'
import { Provider } from './decorators'

@Controller('user')
@Provider()
export class UserController {
	constructor (@Inject() private readonly userService: UserService){}

	@Get('list')
	listUsers () {
		return this.userService.listAllUsers()
	}
}

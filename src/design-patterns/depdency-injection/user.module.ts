import { UserController } from './user.controller'
import { UserService } from './user.service'
import { Module } from './decorators'

@Module({
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule {}

import { IListUserResponse } from './dto/user.dto'

export class UserService {
	public async listUsers (): Promise<IListUserResponse> {
		return {
			total: 2,
			items: [
				{
					name: 'cshh',
					age: 12,
					id: 12
				},
				{
					name: 'dhjh',
					age: 54,
					id: 46
				}
			]
		}
	}
}

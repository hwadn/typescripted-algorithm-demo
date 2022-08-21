export interface IUser {
  name: string
  age: number
  id: number
}
export interface IListUserResponse {
  total: number
  items: IUser[]
}

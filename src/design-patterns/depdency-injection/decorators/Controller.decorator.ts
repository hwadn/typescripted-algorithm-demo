import 'reflect-metadata'
import { PATH_METADATA } from '../constants/metadata'

export const Controller = (path: string): ClassDecorator => {
	return (target) => {
		Reflect.defineMetadata(PATH_METADATA, path, target)
	}
}

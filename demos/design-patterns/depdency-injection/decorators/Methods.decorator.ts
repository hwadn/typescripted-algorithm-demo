import 'reflect-metadata'
import { PATH_METADATA, METHOD_METADATA, METHODS } from '../constants/metadata'

export const MethodDecorator = (path: string): ClassDecorator => {
	return (target) => {
		Reflect.defineMetadata(PATH_METADATA, path, target)
	}
}

const createMethodDecorator = (method: METHODS) => (path: string): MethodDecorator => {
	return (target, propertyKey) => {
    Reflect.defineMetadata(PATH_METADATA, path, target, propertyKey)
    Reflect.defineMetadata(METHOD_METADATA, method, target, propertyKey)
	}
}

export const Get = createMethodDecorator(METHODS.GET)
export const Post = createMethodDecorator(METHODS.POST)

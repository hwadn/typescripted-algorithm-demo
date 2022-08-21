
import 'reflect-metadata'
import { PROPS_METADATA } from '../constants/metadata'

export const Provider = (): ClassDecorator => {
	return (target) => {
		Reflect.defineMetadata(PROPS_METADATA, { id: target.name }, target)
	}
}

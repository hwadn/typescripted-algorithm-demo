
import 'reflect-metadata'
import { INJECT_METADATA } from '../constants/metadata'

// TODOc understand
export const Inject = (): ParameterDecorator => {
	return (target: Object, targetKey: any) => {
    const annotationTarget = target.constructor
    let props: Record<string, any> = {}
    if (Reflect.hasOwnMetadata(INJECT_METADATA, annotationTarget)) {
      props = Reflect.getMetadata(INJECT_METADATA, annotationTarget)
    }

    props[targetKey] = {
      value: targetKey
    }

    Reflect.defineMetadata(INJECT_METADATA, props, annotationTarget)
	}
}

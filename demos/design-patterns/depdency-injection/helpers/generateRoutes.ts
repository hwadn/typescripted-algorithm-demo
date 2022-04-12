import 'reflect-metadata'
import { PATH_METADATA, METHOD_METADATA } from '../constants/metadata'
import { isFunction } from 'util'

export const generateRoutes = (instance: Object) => {
  console.log('instance:', instance)
  const globalPath = Reflect.getMetadata(PATH_METADATA, instance)

  const prototype = Object.getPrototypeOf(instance)
  const methodNames = Object.getOwnPropertyNames(instance)
    .filter(name => isFunction(prototype[name]))
  
  return methodNames.map(methodName => {
    const fn = prototype[methodName]
    const path = Reflect.getMetadata(PATH_METADATA, fn)
    const method = Reflect.getMetadata(METHOD_METADATA, fn)

    return {
      path: `${globalPath}/${path}`,
      method,
      handler: fn
    }
  })
}

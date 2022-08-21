import 'reflect-metadata'
import { PATH_METADATA, METHOD_METADATA } from '../constants/metadata'
import { isFunction } from 'util'
import { UserController } from '../user.controller'

const isConstructor = (methodName: string) => methodName === 'constructor'

export const generateRoutes = (instance: Object) => {
  const prototype = Object.getPrototypeOf(instance)
  const globalPath = Reflect.getMetadata(PATH_METADATA, prototype.constructor)
  const methodNames = Object.getOwnPropertyNames(prototype)
    .filter(name => {
      const fn = prototype[name]
      return !isConstructor(name) && isFunction(prototype[name])
    }) 
  
  return methodNames.map(methodName => {
    const fn = prototype[methodName]
    const path = Reflect.getMetadata(PATH_METADATA, fn)
    const method = Reflect.getMetadata(METHOD_METADATA, fn)

    return {
      path: `/${globalPath}/${path}`,
      method,
      handler: fn,
      methodName
    }
  })
}

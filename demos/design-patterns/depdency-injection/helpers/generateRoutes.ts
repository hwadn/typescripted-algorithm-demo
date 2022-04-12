import 'reflect-metadata'
import { PATH_METADATA, METHOD_METADATA } from '../constants/metadata'
import { isFunction } from 'util'
import { UserController } from '../user.controller'

const isConstructor = (fn: any) => fn === 'constructor'

export const generateRoutes = (instance: Object) => {
  const prototype = Object.getPrototypeOf(instance)
  const globalPath = Reflect.getMetadata(PATH_METADATA, prototype.constructor)
  console.log('globalPath:', globalPath)
  console.log('prototype:', prototype, Object.getOwnPropertyNames(prototype))
  const methodNames = Object.getOwnPropertyNames(prototype)
    .filter(name => {
      const fn = prototype[name]
      console.log(name, isConstructor(fn), isFunction(fn), fn, Object.getPrototypeOf(fn).constructor)
      return !isConstructor(prototype[name]) && isFunction(prototype[name])
    }) 
  
  console.log('methodNames:', methodNames)
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

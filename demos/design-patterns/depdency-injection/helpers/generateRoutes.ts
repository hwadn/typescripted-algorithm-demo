import 'reflect-metadata'
import { PATH_METADATA, METHOD_METADATA, METHODS } from '../constants/metadata'

export const generateRoutes = (instance: Object) => {
  const globalPath = Reflect.getMetadata(PATH_METADATA, instance)
  // TODO
  // const methodNames = Object.getOwnPropertyNames()
}

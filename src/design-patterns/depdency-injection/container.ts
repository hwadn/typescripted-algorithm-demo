import fs from 'fs'
import { PROPS_METADATA } from './constants/metadata'

export class Container {
	private readonly bindMap = new Map()

	bind(id: string, targetClass: any, args: Array<any>) {
		this.bindMap.set(id, {
			targetClass,
			args
		})
	}

	get<T>(id: string): T {
		const target = this.bindMap.get(id)
		const { targetClass, args } = target || {}
		const props = Reflect.getMetadata(PROPS_METADATA, targetClass)
		const ins = Reflect.construct(targetClass, args)
		for (const prop in props) {
			const id = props[prop].value
			ins[prop] = this.get(id)
		}
		return ins
	}
}

export const load = (container: Container) => {
	const list = fs.readdirSync('./')
	list.forEach((file) => {
		let exports: Record<string, any> = {}
		try {
			exports = require(`./${file}`)
		} catch (err) {
			// ignore
		}

		for(const moduleName in exports) {
			const module = exports[moduleName]
			if (typeof module === 'function') {
				const metadata = Reflect.getMetadata(PROPS_METADATA, module)
				if (metadata) {
					container.bind(metadata.id, module, metadata.args)
				}
			}
		}
	})
}

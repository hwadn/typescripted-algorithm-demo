interface IModuleArgs {
	controllers?: any[]
	providers?: any[]
}
// TODO
export function Module(args?: IModuleArgs) {
	return (terget: any) => {
		return terget
	}
}

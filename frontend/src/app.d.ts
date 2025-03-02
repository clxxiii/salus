// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	type User = {
		id: number,
		name: string,
		weight: number
		height: number
	}

	namespace App {
		// interface Error {}
		interface Locals {
			user?: User
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };

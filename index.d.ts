// Type definitions for JS SDK REST API Bitrix24
// Project: https://training.bitrix24.com/rest_help/
// Definitions by: Vladimir Tyrtov <https://bitbucket.org/b24help/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace BX24 {

	interface Result {
		error(): boolean|string
		data(): Object|Array<string>
	}

	interface PlacementOptions {
		ENTITY_ID: string
		ENTITY_VALUE_ID: string
	}

	interface PlacementOptionsUserFieldType extends PlacementOptions{
		FIELD_NAME: string
		MANDATORY: string
		MODE: 'edit'|'view'
		MULTIPLE: 'Y'|'N'
		VALUE: string[]|string
		XML_ID: string
	}

	interface Api { 

		placement: {
			info(): {
				placement: string
				options: PlacementOptions|PlacementOptionsUserFieldType
			}
			call(
				method: string,
				result: string|string[]|Function
			): void
		}
		
		init(callback?: Function): void

		callMethod(
			method: string,
			params: Object,
			callback: Function
		): void
		
		fitWindow(): void
		
		isAdmin(): void

		getDomain(): string

		selectCRM(
			params: {
				entityType: string[],
				multiple: Boolean,
				value?: Object
			},
			callback: Function
		): void

		resizeWindow(
			width: number,
			height: number,
			callback?: Function
		): void

		getScrollSize(): {scrollWidth: number, scrollHeight: number}
	}

}

declare interface Window { BX24: BX24.Api }

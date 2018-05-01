// Type definitions for JS SDK REST API Bitrix24
// Project: https://training.bitrix24.com/rest_help/
// Definitions by: Vladimir Tyrtov <https://bitbucket.org/b24help/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace BX24 {

	interface Result {
		error(): boolean|string
		data(): Array<Object>
	}

	interface ResultObject {
		error(): boolean|string
		data(): Object
	}

	type BatchItem = [
		string,
		Object
	]

	type BatchResult = Result[]

	type PlacementOptions = {
		ENTITY_ID: string,
		ENTITY_VALUE_ID: string
	}

	type PlacementOptionsCard = {
		ID: number
	}

	interface PlacementOptionsUserFieldType extends PlacementOptions{
		FIELD_NAME: string
		MANDATORY: string
		MODE: 'edit'|'view'
		MULTIPLE: 'Y'|'N'
		VALUE: string[]|string
		XML_ID: string
	}

	type PlacementSetItem = {
		DESCRIPTION: string,
		HANDLER: string,
		PLACEMENT: string, 
		TITLE: string
	}

	type PlacementGetItem = {
		description: string,
		handler: string,
		placement: string, 
		title: string
	}

	interface PlacementResult {
		placement: string
		options: PlacementOptionsCard|PlacementOptions|PlacementOptionsUserFieldType
	}

	interface Api { 

		placement: {
			info(): PlacementResult
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
		
		callBatch(
			calls: Object|Array<BatchItem>,
			callback: Function,
			bHaltOnError?: boolean
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

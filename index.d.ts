// Type definitions for JS SDK REST API Bitrix24
// Project: https://training.bitrix24.com/rest_help/
// Definitions by: Vladimir Tyrtov <https://bitbucket.org/b24help/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace BX24 {

	export namespace Entity.IBlock {
		type Element = {
			ID: string
			NAME: string
			XML_ID: string
			CODE: string
			PREVIEW_TEXT: string
			DETAIL_TEXT: string
			DATE_CREATE: string
			CREATED_BY: string
		}
	}

	export namespace Entity.CRM {
		type Deal = {
			ID: string
			TITLE: string
		}
		type Contact = {
			ID: string
			NAME: string
			LAST_NAME: string
			POST: string
			COMPANY_ID: string
		}
	}

	interface UserProfile {
		ADMIN: boolean
		ID: string
		LAST_NAME: string
		NAME: string
		PERSONAL_GENDER: string
		PERSONAL_PHOTO: string
		TIME_ZONE: string
		TIME_ZONE_OFFSET: number
	}

	interface ListsParams {
		FIELDS: object,
		IBLOCK_CODE: string,
		IBLOCK_TYPE_ID: string,
		ELEMENT_ID?: string | number
		ELEMENT_CODE?: string
	}

	interface Result {
		error(): boolean|string
		data(): Array<Object>
	}

	interface ResultError {
		ex: {
			error: string
			error_description: string
		},
		status: number
	}

	interface ResultObject {
		error(): undefined|ResultError
		data(): Object
	}

	type BatchItem = [
		string,
		Object
	]

	type BatchResult = Result[]

	type PlacementOptions = {
		ID: string,
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

	type SelectUserResult = {
		id: string,
		name: string,
		sub: boolean,
		sup: boolean,
		position: string,
		photo: string
	}
	
	interface Api { 

		placement: {
			info(): PlacementResult
			call(
				method: string,
				result: string|string[]|Function
			): void
		}

		appOption: {
			set(name: string, value: string, callback?: Function): void
			get(name: string): string | undefined
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
		
		isAdmin(): boolean

		getDomain(): string

		selectCRM(
			params: {
				entityType: string[],
				multiple: Boolean,
				value?: Object
			},
			callback: Function
		): void

		selectUser(
			callback: (user: SelectUserResult) => void
		): void

		selectUsers(
			callback: (user: SelectUserResult[]) => void
		): void

		resizeWindow(
			width: number,
			height: number,
			callback?: Function
		): void

		getScrollSize(): {scrollWidth: number, scrollHeight: number}

		closeApplication(): void

		openApplication(
			params: object,
			closeCallback?: Function
		): void
	}

}

declare interface Window { BX24: BX24.Api }
